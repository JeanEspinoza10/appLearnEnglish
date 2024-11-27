import React, { useState } from "react";
import ImageHeader from '@assets/images/header.png'
import { Button } from "@components/buttons/Button";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "@components/auth/Auth";
import { CardInformation } from "./CardInformation";
import "./mainheader.css";

export const MainHeader = () => {
  const navigate = useNavigate();
  const {user, isAuthenticated} = useAuth()
  // Function to not view the menu
  const close_menu = () => {
    const menuHam = document.getElementById("menu_hamburguesa")
    if (menuHam.checked) {
      menuHam.checked = false;
    }
  };

  // Get component of Login
  const get_login = (e) => {
    e.preventDefault();
    navigate("/login");
    close_menu();
  };

  
  return (
    <>
      
      <header className="mainHeader">
        <div className="mainHeader-container">
          <a href="/home">
            <img
              src={ImageHeader}
              width="100px"
              height="100px"
              alt="logo-application-learning"
            />
          </a>
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
                <CardInformation/>             
              ):(
                <ul className="listAccess">
                {/* <li>
                  <NavLink
                    to="/home"
                    style={({ isActive }) => {
                      return {
                        textDecoration: isActive ? "underline" : "none",
                      };
                    }}
                    onClick={close_menu}
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
                    onClick={close_menu}
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
                    onClick={close_menu}
                  >
                    Aprendiendo
                  </NavLink>
                </li> */}
                <li>
                  {/* <NavLink
                    to="/contact"
                    style={({ isActive }) => {
                      return {
                        textDecoration: isActive ? "underline" : "none",
                      };
                    }}
                  >
                    Contacto
                  </NavLink> */}
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
