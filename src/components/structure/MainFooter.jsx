import React from "react";
import iconLinkedin from '@assets/icons/linkedin.svg'
import icongitHub from '@assets/icons/github.svg'
import "./mainfooter.css"
export const MainFooter = () => {
  //Get Year
  const currentYesar = new Date().getFullYear();

  return (
    <>
      <footer id="main-footer">
        <div id="main-footer-container">
          <p>@{currentYesar} Jean Espinoza</p>
          <figure>
            <img
              src={icongitHub}
              alt="Access for my repository"
            />
            <img src={iconLinkedin} alt="My social media" />
          </figure>
        </div>
      </footer>
    </>
  );
};
