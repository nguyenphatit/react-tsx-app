import developmentConfigs from './env/development.json';

/**
 * Load the environment configuration with specific environment such as production
 */
class Config {
  constructor() {
    // Load the environment configuration
    if (process.env.NODE_ENV === 'development') {
      this.config = developmentConfigs;
    }
  }

  /**
   * Get the current environment configuration object which is loaded in the load() function
   * @return {object}
   */
  getConfig() {
    return this.config;
  }

  getUnauthorizeEndpoint() {
    return this.config.UnauthorizeEndpoint;
  }

  getAuthorizeEndpoint() {
    return this.config.AuthorizeEndpoint;
  }
}

export default new Config();
