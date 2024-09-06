import React, { useState } from "react";
import "./mainheader.css";
import { Button } from "../buttons/button";
import { FormLogin } from "../form/FormLogin";
import { Link, useNavigate, NavLink } from "react-router-dom";

export const MainHeader = ({ accesLogin, setaccesLogin }) => {
  const navigate = useNavigate();
  //Get component of Login
  const getLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const valueButton = {
    name: "Ingresar",
    functionButton: getLogin,
  };
  return (
    <>
      <header className="mainHeader">
        <nav className="navHeader">
          <img
            src="src\assets\images\header.png"
            width="100px"
            height="100px"
            alt=""
          />
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
                style={({ isActive}) => {
                  return {
                    textDecoration: isActive ? "underline" : "none",
                  };
                }}
              >
                Sevicios
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
            <Button
              name={valueButton.name}
              executeFunciton={valueButton.functionButton}
            />
          </ul>
        </nav>
      </header>
    </>
  );
};
