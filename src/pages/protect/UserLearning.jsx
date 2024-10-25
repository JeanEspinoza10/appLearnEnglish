import { React, useState } from "react";
import { useAuth } from "@components/auth/Auth";
import { LearningContent } from "@components/core/LearningContent";
import { LearningCreate } from "@components/core/LearningCreate";
import { useNavigate } from "react-router-dom";
import logo from "@assets/images/header.png";
import output from "@assets/icons/output.svg";
import "./userlearning.css";

export const UserLearning = () => {
  const { user, setUser, setisAuthenticated } = useAuth();
  const [activeSection, setActiveSection] = useState("Learning");

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

  return (
    <section className="container-user-learning">
      <aside className="container-user-aside">
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
              <button
                variant="ghost"
                onClick={() => setActiveSection("Learning")}
                className={activeSection === "Learning" ? "clicked" : ""}
              >
                Aprender
              </button>
              <button
                variant="ghost"
                onClick={() => setActiveSection("Create")}
                className={activeSection === "Create" ? "clicked" : ""}
              >
                Generar
              </button>
            </div>
            <div className="container-user-aside-main-settings">
              
            </div>
          </main>
          <footer className="container-user-aside-footer">
            <img src={output} alt="output-user-learning" />
            <button
              className="container-user-aside-footer-button"
              onClick={logOut}
            >
              <h4>Salir</h4>
            </button>
          </footer>
        </nav>
      </aside>
      <main className="container-user-learning-main">{renderContent()}</main>
    </section>
  );
};
