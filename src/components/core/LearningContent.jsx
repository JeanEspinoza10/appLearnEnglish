import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPhrasesAll } from "@utils/userService";
import { downloadFileSoundUser, downloadFileImgUser } from "@utils/userService";
import { useAuth } from "@components/auth/Auth";
import { FilterList } from "./FilterList";
import { ViewPhrases } from "./ViewPhrases";
import { Error } from "@components/loaders/Error";

export const LearningContent = () => {
  // Get token
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  // State de phrases for users
  const [phrases, setPhrases] = useState([]);

  // State of Card information
  const [cardInfo, setCardInfo] = useState(null);

  // State for loading or error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [messageError, setmMessageError] = useState("")

  // Function for generate boton

  useEffect(() => {
    const getPhrases = async () => {
      try {
        const response = await fetchPhrasesAll(user.jwt);
        if (response.code === 200) {
          setPhrases(response.data);
          setLoading(false);          
        }
      } catch (error) {
        setError(true)
        setmMessageError("Regresar a la página de inicio")
      }
    };
    getPhrases();
  }, []);

  return (
    <>
    {
      error ? (
        <Error message={messageError} handleClose= {setError} navPage={true} />
      ) : cardInfo ? (
        <main className="container-user-learning-main-all">
          <ViewPhrases
            phrasesID={cardInfo}
            data={phrases}
            url={"https://ingles.appdevelopmentapis.site/phrases"}
            functionExecuteSound={downloadFileSoundUser}
            functionExecuteImg={downloadFileImgUser}
            render={setCardInfo}
          />
        </main>
      ) : (
        <FilterList
          phrasesID={cardInfo}
          setPhrasesID={setCardInfo}
          data={phrases}
          loading={loading}
        />
      )
    }
  </>
  )
};
