import { useState } from "react";
import { FilterList } from '../../components/core/FilterList'
import { ViewPhrases } from '../../components/core/ViewPhrases'
import "./learning.css"
export const Learning = () => {
  const [phrasesID, setPhrasesID] = useState(null)
  const [data, setData] = useState([])

  return( 
        <section className="container-learning">
                  <h1>Frases</h1>
                  <main className="container-learning-phares">
                        <FilterList phrasesID={phrasesID} setPhrasesID={setPhrasesID} data={data} setData={setData}/>
                        <ViewPhrases phrasesID={phrasesID} data={data} />
                  </main>
              
        </section>)

}
