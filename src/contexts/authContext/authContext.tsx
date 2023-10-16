import React, { createContext, useState, ReactNode, useEffect } from "react";
import jwt_decode from "jwt-decode";
import axios from "axios";

type AccessTokensType = {
  access: string | undefined;
  refresh: string | undefined;
};

interface CurrentUserContextType {
  authTokens: AccessTokensType;
  setAuthTokens: React.Dispatch<React.SetStateAction<AccessTokensType>>;
  user: string | undefined;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  callLogout: () => void;
}

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<CurrentUserContextType>(
  {} as CurrentUserContextType
);

const AuthProvider: React.FC<Props> = ({ children }) => {
  let [authTokens, setAuthTokens] = useState<AccessTokensType>(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens") || "")
      : undefined
  );

  let [user, setUser] = useState<string | undefined>(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens") || "")
      : undefined
  );

  let [loading, setLoading] = useState<boolean>(false);


  // Updating tokens
  function updateAccess() {
    if (authTokens) {
      axios.post("http://127.0.0.1:8000/api/token/refresh/", {
          refresh: authTokens.refresh,
        })
        .then(function (response) {
          setAuthTokens(response.data);
          localStorage.setItem("authTokens", JSON.stringify(response.data));
          setUser(jwt_decode(response.data.access));
          setLoading(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function callLogout() {
    setAuthTokens({ access: undefined, refresh: undefined });
    localStorage.removeItem("authTokens");
    setUser(undefined);
  }

  // updating the refresh token after revisiting and accessing the token expiration time

  useEffect(() => {
    if (!loading) {
      updateAccess();
    }

    if (!authTokens) {
      setLoading(true);
    }

    let twentyMinutes = 1000 * 60 * 20;

    let interval = setInterval(() => {
      if (authTokens) {
        updateAccess();
      }
    }, twentyMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={{  setAuthTokens,authTokens, setLoading, loading, callLogout, user, setUser,}}>
      {loading ? children : null}
    </AuthContext.Provider>
  );
};

export default AuthProvider;