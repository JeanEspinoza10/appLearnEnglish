import React from "react";
import "./load.css";
export const Load = () => {
  return (
    <div className="container-loader">
      <div className="cargando">
        <div className="pelotas"></div>
        <div className="pelotas"></div>
        <div className="pelotas"></div>
        <span className="texto-cargando">Loading...</span>
      </div>
    </div>
  );
};
