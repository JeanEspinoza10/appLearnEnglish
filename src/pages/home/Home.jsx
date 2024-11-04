import React, { useEffect } from "react";
import { useAuth } from '@components/auth/Auth';
import ImageHome from '@assets/images/home.jpg'
import './home.css'


export const Home = () => {
  const {setisAuthenticated} = useAuth()
  useEffect(() => {
    setisAuthenticated(false)
  }, [])
  
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
        <img src={ImageHome} alt="Learning English" />
      </figure>
    </section>
  );
};
