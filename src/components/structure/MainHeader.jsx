import React, { useState } from "react";

import "./mainheader.css"
import { Button } from "../buttons/button";
import { FormLogin } from "../form/FormLogin";

export const MainHeader = () => {
  
  //State for controller render component of Login
  const [showLogin, setshowLogin] = useState(false);

  //Get component of Login
  const getLogin = (e) => {
    e.preventDefault();
    setshowLogin(!showLogin);
    
  };

  const valueButton = {
    name: "Ingresar",
    functionButton: getLogin,
  };
  return (
    <>
      <header className="mainHeader">
        <nav className="navHeader">
          <img src="src\assets\images\header.png" width="100px" height="100px"
          
          alt="" />
          <ul className="listAccess">
            <li>
              <a className="" href="">Nosotros</a>
            </li>
            <li>
              <a href="">Servicios</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
            <Button
              name={valueButton.name}
              executeFunciton={valueButton.functionButton}
          />
          </ul>
          
        </nav>
      </header>
      {showLogin && <FormLogin />}
    </>
  );
};
