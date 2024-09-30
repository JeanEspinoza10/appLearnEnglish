import React from 'react';
import { useState,useEffect } from "react";
import {  useNavigate, NavLink } from "react-router-dom";
import { useAuth } from '@components/auth/Auth';
import { authLogin,validateToken } from '@utils/authService';

import "./form.css";
import { Load } from '../loaders/Load';

export function FormLogin({}) {
  // State initial for auth
  const {user,setUser, setisAuthenticated} = useAuth()
  const navigate = useNavigate();

  //State Initial for form
  const [formState, setformState] = useState({
    email: "",
    password: "",
  });

  // Control Login
  const [isLoadingLogin, setisLoadingLogin] = useState(false)


  //Control the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setisLoadingLogin(true)
      const response = await authLogin(formState.email, formState.password)
      const {code , data} = response
      if (code === 200) {
        setisAuthenticated(true)
        const newUser = {
          ...user,
          name: data[0].name,
          email: formState.email,
          jwt: data[0].access_token
        }
        setUser(newUser)
        navigate("/users", { replace: true });
        setisLoadingLogin(false)
        localStorage.setItem('myData', JSON.stringify(newUser));
      }
      else {
        setisLoadingLogin(false)
      }
    } catch (error) {
      setisLoadingLogin(false)
    }
    

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

  // UseEffect to get the user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem('myData');
    if (userData) {
      const { name, jwt, email } = JSON.parse(userData);
      const fetchData = async () => {
        try {
          const response = await validateToken(jwt);
          if (response.code === 200) {
            setisAuthenticated(true)
            const newUser = {
              ...user,
              name: name,
              email: email,
              jwt: jwt
            }
            setUser(newUser)
            navigate("/users", { replace: true });
          }
     
        } catch (error) {
          setisAuthenticated(false)
        }
      };
      fetchData();  
    }
  }, []);  

  return (
    <>
      <section className="container-login">
        {
          isLoadingLogin ? <Load/> : <div className="container-modal">
          <div className="heading">Datos</div>
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
              {/* <NavLink
                to="/login"
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontSize: "15px",
                    textDecoration: isActive? "underline" : "none",
                  };
                }}
              >
                Ovlidar Contraseña
              </NavLink> */}
          </nav>
        </div>
        }
        
      </section>
    </>
  );
}
