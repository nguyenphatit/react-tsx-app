import axios, { AxiosInstance } from "axios";
import AppConfigs from "../config/app-config";
import { AxiosResponse } from "types";
import _ from "lodash";

class ApiService {
  authKey: string | null | undefined;
  getRootLink: Function;
  getRequestHeaders: Function;
  getFullAPILink: Function;
  service: AxiosInstance;

  constructor() {
    let apiService = this;
    this.getRootLink = function (isAuthorized: boolean) {
      let _isAuthorized = _.isUndefined(isAuthorized) ? true : isAuthorized;
      if (_isAuthorized) {
        return AppConfigs.getAuthorizeEndpoint();
      }

      return AppConfigs.getUnauthorizeEndpoint();
    };

    this.getFullAPILink = function (link: string, options?: any) {
      options = options || {};
      return this.getRootLink(options.isAuthorized) + link;
    };


    this.getRequestHeaders = async function (options: any) {
      apiService.authKey = localStorage.getItem("cognitoAuthKey");

      return {
        Authorization: apiService.authKey,
      };
    };

    let service = axios.create();
    service.interceptors.response.use(this.handleSuccess.bind(this));
    this.service = service;
  }

  handleSuccess(response: any) {
    return response;
  }

  static setAuthKey(authKey: string) {
    authKey = `Basic ${authKey}`;
    localStorage.setItem("authKey", authKey);
  }

  handleResponseData(data: any) {
    if ((!!data && data.status === 200) || data.status === 201) {
      return Promise.resolve(data);
    }

    return Promise.reject(data);
  }

  async get(path: string, options?: any) : Promise<AxiosResponse> {
    let requestHeaders = await this.getRequestHeaders(options);
    path = this.getFullAPILink(path, options);
    return this.service
      .get(path, {
        headers: requestHeaders,
      })
  }

  async post(path: string, payload: object, options?: any) {
    let requestHeaders = await this.getRequestHeaders(options);
    path = this.getFullAPILink(path, options);
    return this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
        headers: requestHeaders,
      })
  }

  async put(path: string, payload: object, options?: any) : Promise<AxiosResponse> {
    let requestHeaders = await this.getRequestHeaders(options);
    path = this.getFullAPILink(path, options);
    return this.service
      .request({
        method: "PUT",
        url: path,
        responseType: "json",
        data: payload,
        headers: requestHeaders,
      })
  }

  async delete(path: string, payload: object, options?: any) : Promise<AxiosResponse> {
    let requestHeaders = await this.getRequestHeaders(options);
    path = this.getFullAPILink(path, options);
    return this.service
      .request({
        method: "DELETE",
        url: path,
        responseType: "json",
        data: payload,
        headers: requestHeaders,
      })
  }
}

export default new ApiService();
