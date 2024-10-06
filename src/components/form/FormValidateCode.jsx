import { useState } from "react";
import { Error } from "@components/loaders/Error";
import { validateCode } from '@utils/authService'
import { Load } from "@components/loaders/Load";
import { CreateSucces } from "@components/loaders/CreateSucces";
import {  useNavigate, NavLink } from "react-router-dom";
import "./form.css";

export const FormValidateCode = ({email,setValidation}) => {
    const navigate = useNavigate();
    // Form State
    const [formState, setFormState] = useState("")

    //State for loading or error or success change password
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    // State for error message
    const [messageError, setmMessageError] = useState("");
    //Control the form
    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;

        //Change the state
        setFormState(value);
    };
    // Funcion for change de success
    const setSuccessMessage = (valuelogin) => {
        setSuccess(valuelogin);
        setValidation(valuelogin)
        navigate("/login", { replace: true });
    };

    // Control the submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await validateCode(email,formState);
            const {code, message} = response;

            if (code === 200) {
                setLoading(false)
                setSuccess(true)
                setFormState("")
            }
            else {
                setmMessageError(message)
                setError(true)
                setLoading(false)
            
            }
        } catch (error) {
            setmMessageError(error)
            setLoading(false)
            setError(true);
        }

    };

  return (
   <>
    {loading ? (
        <Load />
      ) : error ? (
        <Error message={messageError} handleClose={setError} />
      ) : success ? (
        <CreateSucces onClose={setSuccessMessage} phrase={"Código validado"} />
      ) : (
        <section className="container-login">
          <div className="heading">Ingresar Código</div>
          <form className="formLogin" onSubmit={handleSubmit}>
            <div className="form-name">
              <input
                type="text"
                id="form-email"
                name="code"
                value={formState}
                onChange={handleChange}
                placeholder="Escribe tu código"
                required
                autoComplete="código"
              />
            </div>
            <button type="submit">Validar</button>
          </form>
        </section>
      )}
   
   </>
  )
}
