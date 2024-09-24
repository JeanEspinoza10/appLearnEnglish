import { useEffect, useState } from "react";

import "./viewphrases.css";
export const ViewPhrases = ({phrasesID, data}) => {
    const [fileSound, setfileSound] = useState(null)
  
    const generateCard = () => {
      if (data) {
        return data.map((value)=>{
          if (value.id === phrasesID){
            return (
              <div className="card-information-phrases" key={value.sound_url}>
                <header className="card-header">
                  <h2 className="front">{value.title}</h2>
                  <h2 className="back">{value.translation}</h2>
                </header>
                <main className="card-content">
                  <figure>
                    
                  </figure>
                  <audio className="card-audio" src={fileSound} controls>
                  Listening Phrases
                  </audio>
                </main>
                <footer className="card-footer">
                  <p name="description-phrases">{value.description}</p>
                </footer>
              </div>
            );
          }
        })
      }
      else {
        return (
          <p>Not have data</p>
        )
      }

    }
    useEffect(() => {
      if (phrasesID) {
        fetch(`http://3.14.149.64/services/free/sound/${phrasesID}`)
        .then((response) => {
          if(!response.ok) {
            console.log("Mistake")
          }
          return response.json()
        })
        .then((responseJson)=>{
          const base64Data = responseJson.data[0].file_content_base64
          const audioDataUrl = `data:audio/mp3;base64,${base64Data}`
          setfileSound(audioDataUrl)
        })
        .catch((error)=>{
          console.log("Mistake error")
        })
      }
    },[phrasesID])

  return (
    <>
      <section id="container-view-phrases">{generateCard()}</section>
    </>
  );
};
