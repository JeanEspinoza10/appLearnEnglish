import React, { useState } from "react";
import { FilterList } from '../../components/core/FilterList'
import { ViewPhrases } from '../../components/core/ViewPhrases'
import "./learning.css"
export const Learning = () => {
  const [filter, setfilter] = useState("All")
  const [phrasesID, setPhrasesID] = useState(1)

  return( 
        <section className="container-learning">
                  <h1>Frases</h1>
                  <main className="container-learning-phares">
                        <FilterList filterWord={filter} setFilterWord={setfilter} phrasesID={setPhrasesID}/>
                        <ViewPhrases pharesID={phrasesID} tag={filter} />
                  </main>
              
        </section>)

}
