import { useState } from "react";

const fakeAuth = {
  isAuthenticated: false,
  signin(cb: Function) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb: Function) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const useAuthentication = () => {
  const [auth, setAuth] = useState<boolean>(false);

  const login = (cb: Function) =>
    fakeAuth.signin(() => {
      setAuth(true);
      cb();
    });

  const logout = (cb: Function) =>
    fakeAuth.signout(() => {
      setAuth(false);
      cb();
    });

  return { auth, login, logout };
};

export default useAuthentication;
