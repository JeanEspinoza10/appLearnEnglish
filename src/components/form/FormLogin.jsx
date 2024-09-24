import React from 'react';
import { useState } from "react";
import {  NavLink } from "react-router-dom";
import "./form.css";

export function FormLogin({}) {
  //State Initial
  const [formState, setformState] = useState({
    email: "",
    password: "",
  });

  //Control the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Control value for email and password
  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    //Change the state
    const newFormState = {
      ...formState,
      [name]: value,
    };
    setformState(newFormState);
  };
  return (
    <>
      <section className="container-login">
        <div className="container-modal">
          <div className="heading">Ingresar</div>
          <form className="formLogin" onSubmit={handleSubmit}>
            <div className="form-email">
              <input
                type="email"
                id="form-email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Correo"
                required
                autoComplete="username"
              />
            </div>
            <div className="form-passw">
              <input
                type="password"
                id="form-password"
                name="password"
                value={formState.password}
                onChange={handleChange}
                autoComplete="current-password"
                placeholder="Contraseña"
                required
              />
            </div>
            <button type="submit">Ingresar</button>
          </form>
          <nav>
            <NavLink
                to="/register"
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontSize: "15px",
                    textDecoration: isActive? "none" : "underline",
                  };
                }}
              >
                Registrarse
              </NavLink>
              <NavLink
                to="/login"
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontSize: "15px",
                    textDecoration: isActive? "underline" : "none",
                  };
                }}
              >
                Ovlidar Contraseña
              </NavLink>
          </nav>
        </div>
      </section>
    </>
  );
}
