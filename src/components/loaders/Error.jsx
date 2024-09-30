import React from "react";
import "./error.css";
export const Error = ({ message, handleClose }) => {
  return (
    <>
        <div id="errorPopup" className="error-popup">
            <div className="error-content">
                <h1 id="errorMessage">Error: {message}</h1>
                <button onClick={()=>handleClose(false)}>Regresar</button>
            </div>
        </div>      
    </>
  );
};
