import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {

  const [loading,setLoading] = useState(true);
  const [authenticated,setAuthenticated] = useState(false);

  useEffect(()=>{
    const checkAuth = async () => {
      try{
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/check-auth`,
          {
            credentials:"include"
          }
        );
        if(response.ok){
          setAuthenticated(true);
        }
        else{
          setAuthenticated(false);
        }
      }
      catch(error){
        console.log(error);
        setAuthenticated(false);
      }
      setLoading(false);
    };
    checkAuth();
  },[]);

  if(loading){
    return <h1>Loading...</h1>;
  }

  return authenticated ? children : <Navigate to="/login" />;

};

export default ProtectedRoutes;