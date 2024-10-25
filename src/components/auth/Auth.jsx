import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name:'',
    email:'',
    jwt:''
  })
  
  const [isAuthenticated, setisAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setisAuthenticated, user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
