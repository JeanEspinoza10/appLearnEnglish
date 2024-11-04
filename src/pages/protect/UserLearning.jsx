import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@components/auth/Auth";
import { LearningContent } from "@components/core/LearningContent";
import { LearningCreate } from "@components/core/LearningCreate";
import { ButtonAside } from "@components/buttons/ButtonAside";
import logo from "@assets/images/header.png";
import output from "@assets/icons/output.svg";
import learning from "@assets/icons/learning.svg";
import create from "@assets/icons/create.svg";
import bottonRigth from "@assets/icons/rigth.svg"
import bottonLeft from "@assets/icons/left.svg"
import "./userlearning.css";

export const UserLearning = () => {
  const { user, setUser, setisAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState("Learning");
  const [message, setMessage] = useState("Aprende tus propias frases.");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("myData");
    setisAuthenticated(false);
    setUser({
      name: "",
      email: "",
      jwt: "",
    });
    navigate("/login");
  };

  const renderContent = () => {
    switch (activeSection) {
      case "Learning":
        return <LearningContent />;
      case "Create":
        return <LearningCreate />;
      default:
        return <div>Default</div>;
    }
  };



  // Función para verificar el tamaño del viewport y ocultar el elemento
  function checkViewportSize() {
      const labelHamburgerLeft = document.getElementsByClassName('label_hamburger-left');
      const labelHamburgerRight = document.getElementsByClassName('label_hamburger');
      const inputRight = document.getElementById("menu_hamburguesa_right");
      const inputLeft = document.getElementById("menu_hamburguesa_left");
      const asideMenu = document.getElementsByClassName("container-user-aside");


      if (window.innerWidth > 799) {
          inputRight.checked = false;
          inputLeft.checked = false;
          labelHamburgerLeft[0].style.display = "none";
          asideMenu[0].style.display = "block";
      }
      else {
        asideMenu[0].style.display = "none";
      }
  }
  window.addEventListener('resize', checkViewportSize);


  const toggleMenuRight = () => {
   
    const asideMenu = document.getElementsByClassName("container-user-aside");
    const inputRight = document.getElementById("menu_hamburguesa_right");
    const classLeft = document.getElementsByClassName("label_hamburger-left");

    if (inputRight.checked) {
      asideMenu[0].style.display = "block";
      classLeft[0].style.display = "block";
      inputRight.checked = false;
    }
  };

  const toggleMenuLeft = () => {
    const viewportWidth = window.innerWidth;
    const asideMenu = document.getElementsByClassName("container-user-aside");
    const classLeft = document.getElementsByClassName("label_hamburger-left");
    const inputLeft = document.getElementById("menu_hamburguesa_left");

    if (inputLeft.checked) {
      asideMenu[0].style.display = "none";
      classLeft[0].style.display = "none";
      inputLeft.checked = false;
    }
  }

  return (
    <section className="container-user-learning">
          <label className="label_hamburger" htmlFor="menu_hamburguesa_right">
          <img 
              src={bottonRigth} // Asegúrate de cambiar esto a la ruta correcta de tu imagen
              alt="Menu" // Texto alternativo para la imagen
              width="40" // Ajusta el ancho según sea necesario
              height="40" // Ajusta la altura según sea necesario
            />
          </label>
          <input type="checkbox"  id="menu_hamburguesa_right" onChange={toggleMenuRight}></input>
          
          <label className="label_hamburger-left" htmlFor="menu_hamburguesa_left">
          <img 
              src={bottonLeft} // Asegúrate de cambiar esto a la ruta correcta de tu imagen
              alt="Menu" // Texto alternativo para la imagen
              width="40" // Ajusta el ancho según sea necesario
              height="40" // Ajusta la altura según sea necesario
            />
          </label>
          <input type="checkbox" id="menu_hamburguesa_left" onChange={toggleMenuLeft}></input>

      <aside className="container-user-aside" id="container-user-aside">
          <nav className="container-user-aside-nav">
          <figure className="container-user-aside-header">
            <img
              src={logo}
              width="150px"
              height="100px"
              alt="logo-application-learning"
            />
          </figure>
          <div className="line-separator"></div>
          <main className="container-user-aside-main">
            <div className="container-user-aside-main-service">
                <ButtonAside
                  funcitonExecute={() => 
                  {
                    setActiveSection("Learning")
                    setMessage("Aprende tus propias frases.") 
                  }                  
                  }
                  logo={learning}
                  name="Aprender"
                />
                <ButtonAside
                  funcitonExecute={() => 
                  {
                    setActiveSection("Create")
                    setMessage("Genera tus propias frases.") 
                  }                    
                  }
                  logo={create}
                  name="Crear"
                />
            </div>
            <div className="container-user-aside-main-settings">
              
            </div>
          </main>
          <div className="line-separator"></div>
          <footer className="container-user-aside-footer">
            <ButtonAside
              funcitonExecute={logOut}
              logo={output}
              name="Salir"
            />
          </footer>
        </nav>
      </aside>
      <main className="container-user-learning-main">
        <header className="container-user-learning-header">
          <h3>🖐️ Hi, {user.name}🖐️</h3>
          <p>
                {message}
          </p>
        </header>
        <section className="container-user-learning-section">
          {renderContent()}
        </section>
      </main>
    </section>
  );
};
