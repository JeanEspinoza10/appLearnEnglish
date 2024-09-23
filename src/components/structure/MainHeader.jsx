import React, { useState } from "react";
import "./mainheader.css";
import { Button } from "@components/buttons/button";
import { useNavigate, NavLink } from "react-router-dom";

export const MainHeader = ({ accesLogin, setaccesLogin }) => {
  const navigate = useNavigate();
  
  // Get component of Login
  const get_login = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const value_button = {
    name: "Ingresar",
    function_button: get_login,
  };

  return (
    <>
      <header className="mainHeader">
        <div className="mainHeader-container">
          <img
            src="src/assets/images/header.png"
            width="100px"
            height="100px"
            alt="logo-application-learning"
          />
          <nav className="navHeader">
            <ul className="listAccess">
              <li>
                <NavLink
                  to="/home"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/learning"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Aprendiendo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? "underline" : "none",
                    };
                  }}
                >
                  Contacto
                </NavLink>
              </li>
              <Button
                name={value_button.name}
                executeFunction={value_button.function_button}
              />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
