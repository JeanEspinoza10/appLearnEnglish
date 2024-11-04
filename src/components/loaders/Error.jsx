import React from "react";
import { useNavigate } from "react-router-dom";
import "./error.css";
export const Error = ({ message, handleClose, navPage=false }) => {
  const navigate = useNavigate();
  return (
    <>
        <div id="errorPopup" className="error-popup">
            <div className="error-content">
                <h1 id="errorMessage">Error: {message}</h1>
                <button onClick={()=>
                {
                  handleClose(false)
                  if (navPage) {
                    navigate("/login"); // Navega a la página de login si navPage es true
                  }
                }
                  }>Regresar</button>
            </div>
        </div>      
    </>
  );
};