import React, { useState } from "react";
import { FilterList } from '../../components/core/FilterList'
import { ViewPhrases } from '../../components/core/ViewPhrases'

export const Learning = () => {
  const [filter, setfilter] = useState("All")
  const [phrasesID, setPhrasesID] = useState(1)

  return <>
        <FilterList filterWord={filter} setFilterWord={setfilter} phrasesID={setPhrasesID}/>
        <ViewPhrases pharesID={phrasesID} tag={filter} />
  </>
}
