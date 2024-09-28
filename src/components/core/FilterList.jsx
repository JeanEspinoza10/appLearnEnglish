import { useEffect,useState} from 'react';
import { phrases } from "@const/listphrases.js";
import "./filterlist.css"

export const FilterList = ({ setPhrasesID, phrasesID, data, setData}) => {
  
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const onClickPhrases = (event) => {
    event.preventDefault()
    const id = parseInt(event.target.id, 10);
    setPhrasesID(id);
  };

  const generateListWords = (listValue) => {
    return listValue.map((value)=>(
      <button
        id={value.id}
        key={value.id}
        onClick={(event) => onClickPhrases(event)}
        className={phrasesID === value.id ? 'clicked' : ''}
      >
        {value.title}
      </button>
    ))
  };

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
  
  return (
    <>
      <section id="container-phrases-list">
        {(loading || error) && <button>{loading ? 'Getting Data' : 'An error occurred'}</button>}
        {generateListWords(data)}
      </section>
    </>
  );
};
