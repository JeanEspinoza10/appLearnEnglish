import { useState,useEffect } from "react";
import { downloadFileSound, downloadFileImg } from "@utils/authService";
import { FilterList } from '../../components/core/FilterList'
import { ViewPhrases } from '../../components/core/ViewPhrases'
import "./learning.css"
export const Learning = () => {
  const [phrasesID, setPhrasesID] = useState(null)
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(()=>{
      fetch('https://ingles.appdevelopmentapis.site/services/free/phrases')
      .then((response)=>{
        if(!response.ok) {
          setError(true);
        }
        return response.json()
      })
      .then((responseJson)=>{
        setData(responseJson.data)
        setPhrasesID(responseJson.data[0].id)
        setLoading(false)
      })
      .catch((error)=>{
        setError(true);
        setLoading(false);
      })
    },[]);

  return( 
        <section className="container-learning">
                  <h1>Frases</h1>
                  <main className="container-learning-phares">
                        <FilterList phrasesID={phrasesID} setPhrasesID={setPhrasesID} data={data} loading={loading}/>
                        <ViewPhrases phrasesID={phrasesID} data={data} url = {"https://ingles.appdevelopmentapis.site/services/free"} functionExecuteSound={downloadFileSound} functionExecuteImg={downloadFileImg}/>
                  </main>
              
        </section>)

}
