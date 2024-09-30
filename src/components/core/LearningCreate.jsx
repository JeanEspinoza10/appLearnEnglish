import React from 'react'
import { FormCreatePhrases } from '../form/FormCreatePhrases'
import { phrasesCreate } from '../../utils/userService'

export const LearningCreate = () => {

  return (
    <FormCreatePhrases functionExecute={phrasesCreate}/>
  )
}
