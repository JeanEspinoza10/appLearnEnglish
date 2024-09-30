
import React from 'react'
import { useState } from "react";
import "./form.css";
import { useAuth } from "@components/auth/Auth";
import { Load } from '@components/loaders/Load';
export const FormCreatePhrases = ({functionExecute}) => {
    const {user} = useAuth()
   //State Initial
   const [formState, setformState] = useState(
    {
        phrase:""
    }
    );

    // State for loading or error
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

//Control the form
const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        setLoading(true)
        const response = await functionExecute(user.jwt, formState.phrase);
        const {code, message} = response;
        if (code === 200) {
            setLoading(false)
            setError(false)
            const newFormState = {
                ...formState,
                phrase:""
            }
            setformState(newFormState)
            console.log(response)
        }
        else {
            setLoading(false)
            setError(true)
        }
    } catch (err) {
        setError(true)
    }

    
}

//Control value for email and password
const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    //Change the state
    const newFormState = {
        ...formState,
        [name]: value
    }
    setformState(newFormState)
}
return (
  <>
    {loading ? (
      <Load/>
    ) : (
      <section className="container-login">
        <div className="heading">Ingresa la frase</div>
        <form className="formLogin" onSubmit={handleSubmit}>
          <div className="form-name">
            <input
              type="text"
              id="form-phrase"
              name="phrase"
              value={formState.phrase}
              onChange={handleChange}
              placeholder="Digita tu frase en español"
              required
              autoComplete="users"
            />
          </div>
          <button type="submit">Crear</button>
        </form>
      </section>
    )}
  </>
);
}
