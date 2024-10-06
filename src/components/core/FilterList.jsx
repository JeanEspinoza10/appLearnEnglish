import { useEffect,useState} from 'react';
import { phrases } from "@const/listphrases.js";
import "./filterlist.css"
import { Load } from "@components/loaders/Load";

export const FilterList = ({ setPhrasesID, phrasesID, data, loading}) => {
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

  
  
  return (
    <>
      {
        loading ? (
          <Load/>
        ) : (
          <section id="container-phrases-list">
            {generateListWords(data)}
          </section>
        )
      }
    </>
  );
};
