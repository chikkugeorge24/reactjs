import { createContext, useState, useEffect, useCallback } from "react";
let logoutTimer;
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expiresIn) => {},
  logout: () => {}
});

const calculateRemainingTime = expiresIn => {
  const currentTime = new Date().getTime();
  const expiresTime = new Date(expiresIn).getTime();
  const remainingTime = expiresTime - currentTime;
  return remainingTime;
};

const restoreToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationTime = localStorage.getItem("expirationTime");
  const remainingTime = calculateRemainingTime(storedExpirationTime);
  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTime
  };
};
export const AuthContextProvider = props => {
  const tokenData = restoreToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const isUserLoggedIn = !!token;
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);
  const loginHandler = (token, expiresIn) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expiresIn);
    const remainingDuration = calculateRemainingTime(expiresIn);
    logoutTimer = setTimeout(logoutHandler, remainingDuration);
  };
  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);
  const contextValue = {
    token: token,
    isLoggedIn: isUserLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
