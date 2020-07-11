import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({
  isAuthenticated: "false",
  authenticate(user) {},
  registerUser(user) {},
  logOut() {},
});

function AuthComponent(props) {
  const prevAuth = window.localStorage.getItem("token") || "false";
  const [authenticated, setAuthenticated] = useState(prevAuth);

  useEffect(() => {
    window.localStorage.setItem("token", authenticated);
  }, [authenticated]);

  function authHandler(user) {
    const newToken = "authorized";
    localStorage.setItem("token", newToken);
    setAuthenticated(newToken);
    alert("თქვენ წარმატებით გაიერეთ ავტორიზაცია");
  }

  function registerHandler(user) {
    const newToken = "authorized";
    localStorage.setItem("token", newToken);
    setAuthenticated(newToken);
    alert("თქვენ წარმატებით გაიერეთ რეგისტრაცია");
  }

  function logOutHandler() {
    localStorage.setItem("token", "false");
    setAuthenticated("false");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authenticated,
        authenticate(user) {
          authHandler(user);
        },
        registerUser(user) {
          registerHandler(user);
        },
        logOut() {
          logOutHandler();
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthComponent;
