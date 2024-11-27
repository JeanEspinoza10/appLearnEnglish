import React, { useEffect } from "react";
import { useAuth } from '@components/auth/Auth';
import ImageHome from '@assets/images/home.jpg'
import { Button } from "@components/buttons/Button";
import { useNavigate, NavLink } from "react-router-dom";

import './home.css'


export const Home = () => {

  const navigate = useNavigate();

  //Function for navigate to create

  const {setisAuthenticated} = useAuth()
  useEffect(() => {
    setisAuthenticated(false)
  }, [])
  
  const gettingRouteCreate = (e) => {
    e.preventDefault();
    navigate("/service/create");
  }

  const gettingRouteLearning = (e) => {
    e.preventDefault();
    navigate("/learning");
  }
  return (
    <section className="container-home">
      <div className="container-home-description">
        <h1>Domina el Inglés</h1>
        <p>
        Mejora tu vocabulario con frases 
        de la vida cotidiana.<br></br>
        🤖¡Deja que la IA te ayude a lograrlo!🤖
        </p>
      </div>
      <div className="container-home-buttons">
        <Button name={"Crear"} executeFunction={gettingRouteCreate} />
        <Button name={"Visualizar"} executeFunction={gettingRouteLearning} />
      </div>
     
    </section>
  );
};
