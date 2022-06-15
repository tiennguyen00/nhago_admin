import {AuthProvider} from "react-admin";

const _username = "Nhagobamien",
  _password = "1234M5";

const authProvider: AuthProvider = {
  login: ({username, password}: any) => {
    if (username === _username && password === _password) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      // accept only username/password pre-define
      return Promise.resolve();
    }
    return Promise.reject("Authentication fail !!!");
  },
  logout: () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("username") === _username &&
    localStorage.getItem("password") === _password
      ? Promise.resolve()
      : Promise.reject(),
  getPermissions: () => Promise.reject("Unknown method"),
  getIdentity: () =>
    Promise.resolve({
      id: "user",
      fullName: "Manh Vu",
    }),
};

export default authProvider;
