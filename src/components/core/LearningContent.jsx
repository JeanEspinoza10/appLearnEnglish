import React, {useState, useEffect} from 'react';
import { fetchPhrasesAll } from '@utils/userService';
import { downloadFileSoundUser, downloadFileImgUser } from "@utils/userService";
import { useAuth } from "@components/auth/Auth";
import { FilterList } from './FilterList';
import { ViewPhrases } from './ViewPhrases';
export const LearningContent = () => {
    // Get token
    const {user, setUser} = useAuth()

    // State de phrases for users
    const [phrases, setPhrases] = useState([])
    
    // State of Card information
    const [cardInfo, setCardInfo] = useState(null)

    // State for loading or error
    const [loading, setLoading] = useState(true)

    // Function for generate boton
        
    
    
    
    useEffect(() => {
      const getPhrases = async () => {
        try {
          const response = await fetchPhrasesAll(user.jwt);
          if (response.code === 200) {
            setPhrases(response.data);
            setLoading(false)
          }
        } catch (error) {
          console.error("Error fetching phrases:", error);
        }
      };
      getPhrases();
    }, []);
    

  return (
    
    cardInfo?(
      <main className='container-user-learning-main-all'>
          <ViewPhrases phrasesID={cardInfo} data={phrases} url={"https://ingles.appdevelopmentapis.site/phrases"} functionExecuteSound={downloadFileSoundUser} functionExecuteImg={downloadFileImgUser}/>
          <button
          onClick={() => {
            setCardInfo(null)
          }}
          >
            Back
          </button>
      </main>
      
    ):(
    <FilterList phrasesID={cardInfo} setPhrasesID={setCardInfo} data={phrases} loading={loading}/>
   )
    
  )
}
