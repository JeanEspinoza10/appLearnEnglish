import React from "react";
import "./mainfooter.css"
export const MainFooter = () => {
  //Get Year
  const currentYesar = new Date().getFullYear();

  return (
    <>
      <footer id="main-footer">
        <p>@{currentYesar} Jean Espinoza</p>
        <figure>
            <img src="src\assets\icons\github.svg" alt="Access for my repository" />
            <img src="src\assets\icons\linkedin.svg" alt="My social media" />
        </figure>
      </footer>
    </>
  );
};
