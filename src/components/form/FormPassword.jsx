import { useState } from "react";
import { Error } from "@components/loaders/Error";
import { changePassword } from '@utils/userService'
import { Load } from "@components/loaders/Load";
import { CreateSucces } from "@components/loaders/CreateSucces";
import {  useNavigate, NavLink } from "react-router-dom";
import "./form.css";

export const FormPassword = ({ fields }) => {

    const navigate = useNavigate();
  // State for form
  const [formState, setformState] = useState({
    email: "",
  });

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
    const newFormState = {
      ...formState,
      [name]: value,
    };
    setformState(newFormState);
  };

  // Funcion for change de success
  const setSuccessMessage = (value) => {
    setSuccess(value);
    navigate("/login", { replace: true });
  };

  // Control the submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        setLoading(true)
        const response = await changePassword(formState.email);
        const {code, message} = response;

        if (code === 200) {
            setLoading(false)
            setSuccess(true)
            setformState({
                email: ""
            })
        }
        else {
            setmMessageError(message)
            setError(true)
            setLoading(false)
           
        }
    } catch (error) {
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
        <CreateSucces onClose={setSuccessMessage} phrase={"Se ha enviado un correo con la nueva contraseña"} />
      ) : (
        <section className="container-login">
          <div className="heading">Cambiar Contraseña</div>
          <form className="formLogin" onSubmit={handleSubmit}>
            <div className="form-name">
              <input
                type="email"
                id="form-email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Escribe tu correo"
                required
                autoComplete="email"
              />
            </div>
            <button type="submit">Solicitar</button>
          </form>
          <nav>
            <NavLink
              to="/login"
              style={({ isActive }) => {
                return {
                  fontSize: "15px",
                  textDecoration: isActive ? "none" : "underline",
                };
              }}
            >
              Ingresar
            </NavLink>
          </nav>

        </section>
      )}
    </>
  );
};
