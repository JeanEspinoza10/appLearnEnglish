import React, { useEffect } from "react";
import { useId } from 'react';
import { NavLink } from "react-router-dom";
import {data_service } from '@const/serviceLink.js';
import { useAuth } from '@components/auth/Auth';
import "../service/service.css";

const generateCards = (data) => {
  return data.map((elemento) => (
    < React.Fragment key={elemento.id}>
      <div className="card-service" >
        <h2>{elemento.title}</h2>
        <p>{elemento.description}</p>
        <NavLink to="/learning">Acceder</NavLink>
      </div>
    </React.Fragment>
  ));
};

export const Service = () => {
  const {setisAuthenticated} = useAuth()
  const passwordHintId = useId()
  useEffect(() => {
    setisAuthenticated(false)
  }, [])

  return (
    <>
      <section className="container-service">
        <header className="container-service-description">
          <h1>Servicios</h1>
          
          <p>
            ¿Quieres enriquecer tu vocabulario y aprender frases útiles y
            significativas? Nuestro servicio está diseñado para ayudarte a
            mejorar tus habilidades lingüísticas y comunicativas. Ofrecemos una
            plataforma interactiva
          </p>
        </header>
        <main className="container-service-cards-service">
          {generateCards(data_service)}
        </main>
      </section>
    </>
  );
};
