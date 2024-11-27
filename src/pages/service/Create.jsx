import { Form } from 'react-router-dom'
import { FormCreatePhrases } from '@components/form/FormCreatePhrases'
import { createPhrasesBrowsers } from '@utils/browsers'
import { Button } from "@components/buttons/Button";
import { useNavigate } from "react-router-dom";

import './create.css'

export const Create = () => {
  const navigate = useNavigate();

  const gettingRouteHome = (e) => {
    e.preventDefault();
    navigate("/home");
  }

  const gettingRouteLearning = (e) => {
    e.preventDefault();
    navigate("/learning");
  }
  return (
    <>
      <section className="container-service-create">
        <div className="container-service-create-description">
          <p>
          Pon a prueba tu imaginación y crea frases únicas para mejorar tu inglés.🤓🤓🤓
          </p>
        </div>
        <main className='container-service-form'> 
          <FormCreatePhrases functionExecute={createPhrasesBrowsers}/>
        </main>
        <footer className='container-service-footer'>
          <Button name ={"Regresar"} executeFunction={gettingRouteHome} />
          <Button name ={"Visualizar" } executeFunction={gettingRouteLearning} />
        </footer>
      </section>
    </>
  )
}
