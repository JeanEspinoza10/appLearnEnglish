import React from "react";
import './home.css'

export const Home = () => {
  return (
    <section className="container-home">
      <div className="container-home-description">
        <h1>Domina el Inglés</h1>
        <p>
          Aprender inglés nunca ha sido tan fácil y divertido. Descubre una
          forma revolucionaria de dominar el idioma con frases que realmente
          usarás en tu día a día.
        </p>
      </div>
      <figure className="container-home-img">
        <img src="src\assets\images\home.png" alt="Learning English" />
      </figure>
    </section>
  );
};
