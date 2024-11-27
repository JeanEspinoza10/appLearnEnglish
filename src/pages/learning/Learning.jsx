import { useState, useEffect, useId } from "react";
import { downloadFileSound, downloadFileImg } from "@utils/authService";
import { FilterList } from "@components/core/FilterList";
import { ViewPhrases } from "@components/core/ViewPhrases";
import { Load } from "@components/loaders/Load";
import { Error } from "@components/loaders/Error";
import { useAuth } from '@components/auth/Auth';
import { Button } from "@components/buttons/Button";
import { useNavigate } from "react-router-dom";
import "./learning.css";


export const Learning = () => {
  const navigate = useNavigate();

  const {setisAuthenticated} = useAuth()
  const [phrasesID, setPhrasesID] = useState(null);
  const [data, setData] = useState([]);
  const [viewDetails, setviewDetailst] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('')

  const passwordHintId = useId();

  const gettingRouteCreate = (e) => {
    e.preventDefault();
    navigate("/service/create");
  }

  const gettingRouteHome = (e) => {
    e.preventDefault();
    navigate("/home");
  }

  useEffect(() => {
    setisAuthenticated(false)

    fetch("https://ingles.appdevelopmentapis.site/services/free/phrases/browsers")
    .then((response) => {
      if (!response.ok) {
        setLoading(false);         
      }
      return response.json();
    }).then((responseJson) => {
      let code = responseJson.code;
      if (code === 200) {
        setData(responseJson.data);
        setPhrasesID(responseJson.data[0].id);
        setLoading(false);
      }
      else {
        return fetch("https://ingles.appdevelopmentapis.site/services/free/phrases")
          .then((response) => {
            if (!response.ok) {
              setLoading(false);
              setMessageError(error);
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
            setMessageError(error);
            setError(true);
            setLoading(false);
          });
      }
      
    }).catch((error) => {
      console.log(error)
      setMessageError(error)
      setError(true);
      setLoading(false);
    })
    
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
          ¡Descubre frases que llevarán tu inglés al siguiente nivel!<br/>
          💡  Explora y aprende de forma visual. <br/>
          🎧 Auditiva para mejorar tu vocabulario en inglés de manera efectiva y divertida.<br/>
          <br/>
          👇 Elige tu frase favorita y comienza ahora. 👇<br/>
          </p>
          <main className="container-learning-phares">
            {viewDetails ? (
              <>
                {
                  Array.from(
                    document.getElementsByClassName("container-learning-phares")
                  ).forEach((element) => {
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
                  render={setviewDetailst}
                  buttonRender={false}
                />
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
          <div className="container-home-buttons">
            {
              viewDetails ? (
                <Button name={"Regresar"} executeFunction={() => setviewDetailst(false)} />
              ) : (
                <Button name={"Regresar"} executeFunction={gettingRouteHome} />
              )
            }
          </div>
        </section>
      )}
    </>
  );
};
