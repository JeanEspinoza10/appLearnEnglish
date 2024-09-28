import React, { useState } from "react";
import ImageHeader from '@assets/images/header.png'
import { Button } from "@components/buttons/Button";
import { useNavigate, NavLink } from "react-router-dom";
import "./mainheader.css";
import { useAuth } from "@components/auth/Auth";

export const MainHeader = () => {
  const navigate = useNavigate();
  const {user, isAuthenticated} = useAuth()

  // Get component of Login
  const get_login = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <>
      
      <header className="mainHeader">
        <div className="mainHeader-container">
          <img
            src={ImageHeader}
            width="100px"
            height="100px"
            alt="logo-application-learning"
          />
          <label className="label_hamburger" htmlFor="menu_hamburguesa">
            <svg viewBox="0 0 100 80" width="40" height="40">
              <rect width="100" height="20"></rect>
              <rect y="30" width="100" height="20"></rect>
              <rect y="60" width="100" height="20"></rect>
            </svg>
          </label>
          <input type="checkbox" name="" id="menu_hamburguesa"></input>
          <nav className="navHeader">
              {
                isAuthenticated? (
                <div>
                  {user.name}
                </div>              
              ):(
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
                <Button name="Ingresar" executeFunction={get_login} />
              </ul>
                )
              }
          </nav>
        </div>
      </header>
    </>
  );
};
