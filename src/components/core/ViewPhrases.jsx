import { useEffect, useState } from "react";
import { Load } from "@components/loaders/Load";
import "./viewphrases.css";
export const ViewPhrases = ({phrasesID, data}) => {

    const [loading, setloading] = useState(true)
    const [fileSound, setfileSound] = useState(null)
    const [fileImg, setfileImg] = useState(null)

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
                    {
                      loading ? <Load/>: <img src={fileImg} alt="image-phrases" />
                    }
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
        setfileSound(null)
        setfileImg(null)
        setloading(true)
        fetch(`https://ingles.appdevelopmentapis.site/services/free/sound/${phrasesID}`)
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
        fetch(`https://ingles.appdevelopmentapis.site/services/free/img/${phrasesID}`)
        .then((response) => {
          if(!response.ok) {
            console.log("Mistake")
          }
          return response.json()
        })
        .then((responseJson)=>{
          const base64Data = responseJson.data[0].file_content_base64
          const imgDataUrl = `data:image/png;base64,${base64Data}`
          setfileImg(imgDataUrl)
          setloading(false)
        })
        .catch((error)=>{
          console.log("Mistake error")
        })
      }
      return () => {
        setfileSound(null)
        setfileImg(null)
        setloading(true)
      }
    },[phrasesID])

  return (
    <>
       <section id="container-view-phrases">{generateCard()}</section>
    </>
  );
};
