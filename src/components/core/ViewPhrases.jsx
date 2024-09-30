import { useEffect, useState } from "react";
import { Load } from "@components/loaders/Load";
import { useAuth } from "@components/auth/Auth";
import "./viewphrases.css";
export const ViewPhrases = ({phrasesID, data, url, functionExecuteSound , functionExecuteImg}) => {
    const {user, isAuthenticated} = useAuth()
  
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
        const fetchResources = async () => {
          try {
            const [audioDataUrl, imgDataUrl] = await Promise.all([
              functionExecuteSound(url, phrasesID),
              functionExecuteImg(url, phrasesID)
            ]);
            setfileSound(audioDataUrl);
            setfileImg(imgDataUrl);
            setloading(false);
          } catch (error) {
            console.log("Error while downloading files:", error);
            setloading(false);
          }
        };
        const fetchResourcesUser = async () => {
          try {
            const [audioDataUrl, imgDataUrl] = await Promise.all([
              functionExecuteSound(url, phrasesID,user.jwt),
              functionExecuteImg(url, phrasesID,user.jwt)
            ]);
            setfileSound(audioDataUrl);
            setfileImg(imgDataUrl);
            setloading(false);
          } catch (error) {
            console.log("Error while downloading files:", error);
            setloading(false);
          }
        };
        if (isAuthenticated) {
          fetchResourcesUser();
        } else {
          fetchResources();
        }  
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
