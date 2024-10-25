import { useState, useEffect, useId } from "react";
import { downloadFileSound, downloadFileImg } from "@utils/authService";
import { FilterList } from "@components/core/FilterList";
import { ViewPhrases } from "@components/core/ViewPhrases";
import { Load } from "@components/loaders/Load";
import { Error } from "@components/loaders/Error";
import { useAuth } from '@components/auth/Auth';
import "./learning.css";


export const Learning = () => {
  const {setisAuthenticated} = useAuth()
  const [phrasesID, setPhrasesID] = useState(null);
  const [data, setData] = useState([]);
  const [viewDetails, setviewDetailst] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('')

  const passwordHintId = useId();

  useEffect(() => {
    setisAuthenticated(false)
    fetch("https://ingles.appdevelopmentapis.site/services/free/phrases")
      .then((response) => {
        if (!response.ok) {
          setLoading(false);
          setMessageError(error)
          setError(true);          
        }
        return response.json();
      })
      .then((responseJson) => {
        setData(responseJson.data);
        setPhrasesID(responseJson.data[0].id);
        setLoading(false);
      })
      .catch((error) => {
        setMessageError(error)
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Load />
      ) : error ? (
        <Error message={messageError} handleClose={setError} />
      ) : (
        <section className="container-learning">
          <h1>Frases</h1>
          <p>
            Descubre frases especialmente diseñadas para mejorar tu vocabulario
            y dominar el inglés con facilidad. ¡Aprovecha esta oportunidad para
            llevar tu fluidez al siguiente nivel de manera rápida y efectiva!
          </p>
          <main className="container-learning-phares">
            {viewDetails ? (
              
              <>
              
              {
                // Cambiar la clase de los elementos cuando viewDetails sea true
                Array.from(document.getElementsByClassName("container-learning-phares")).forEach((element) => {
                  element.classList.remove("container-learning-phares");
                  element.classList.add("container-learning-phares-column");
                })
              }
                <ViewPhrases
                  phrasesID={phrasesID}
                  data={data}
                  url={"https://ingles.appdevelopmentapis.site/services/free"}
                  functionExecuteSound={downloadFileSound}
                  functionExecuteImg={downloadFileImg}
                />
                <button key={passwordHintId} onClick={() => setviewDetailst(false)}>
                  Regresar
                </button>
                
              </>
            ) : (
              <FilterList
                phrasesID={phrasesID}
                setPhrasesID={setPhrasesID}
                data={data}
                loading={loading}
                viewDetails={setviewDetailst}
              />
            )}
          </main>
        </section>
      )}
    </>
  );
};
