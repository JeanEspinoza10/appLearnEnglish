import { useState } from "react";
import {  Form, NavLink, useNavigate } from "react-router-dom";
import { Load } from "../loaders/Load";
import { authRegister } from "@utils/authService";
import { Error } from "@components/loaders/Error";
import { FormValidateCode } from "./FormValidateCode";

export function FormRegister() {
    
    const navigate = useNavigate();
    
    // Control Login
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(false)
    const [messageError, setmMessageError] = useState("")
    const [validation, setValidation] = useState(false)


    //State Initial
    const [formState, setformState] = useState(
        {
            nameRegister:"",
            emailRegister: "",
            passwordRegister: "",
            passwordConfirmRegister:""
        }
    );


    //Control the form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setisLoading(true)
            if(formState.passwordRegister !== formState.passwordConfirmRegister) {
                setError(true)
                setmMessageError("Las contraseñas no coinciden")
                setisLoading(false)
                return
            }
            const response = await authRegister(formState.nameRegister, formState.emailRegister, formState.passwordRegister);
            const {code, message} = response;
            if (code === 200) {
                setisLoading(false)
                setValidation(true)
            }
            else {
                setisLoading(false)
                setmMessageError(message)
                setError(true)
            }
        }catch (error) {
            setmMessageError(error)
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
        {isLoading ? (
            <Load />
        ) : error ? (
            <Error message={messageError} handleClose= {setError} />
        ) : validation ? (
            <FormValidateCode email={formState.emailRegister} setValidation={setValidation}/>
        ) :(
            <section className="container-login">
                <div className="heading">Datos Personales</div>
                <form className="formLogin" onSubmit={handleSubmit}>
                    <div className="form-name">
                        <input
                            type="text"
                            id="form-nameRegister"
                            name="nameRegister"
                            value={formState.nameRegister}
                            onChange={handleChange}
                            placeholder="Nombres y Apellidos"
                            required
                            autoComplete="users"
                        />
                    </div>
                    <div className="form-email">
                        <input
                            type="email"
                            id="form-emailRegister"
                            name="emailRegister"
                            value={formState.emailRegister}
                            onChange={handleChange}
                            placeholder="Correo"
                            required
                            autoComplete="username"
                        />
                    </div>
                    <div className="form-passw">
                        <input
                            type="password"
                            id="form-passwordRegister"
                            name="passwordRegister"
                            value={formState.passwordRegister}
                            onChange={handleChange}
                            autoComplete="current-password"
                            placeholder="Contraseña"
                            required
                        />
                    </div>
                    <div className="form-repassword">
                        <input
                            type="password"
                            id="form-passwordConfirmRegister"
                            name="passwordConfirmRegister"
                            value={formState.passwordConfirmRegister}
                            onChange={handleChange}
                            autoComplete="current-password"
                            placeholder="Confirmar Contraseña"
                            required
                        />
                    </div>
                    <button type="submit">Registrar</button>
                </form>
                <nav>
                    <NavLink
                        to="/login"
                        style={({ isActive, isPending, isTransitioning }) => ({
                            fontSize: "15px",
                            textDecoration: isActive ? "none" : "underline",
                        })}
                    >
                        Ingresar
                    </NavLink>
                    {/* 
                    <NavLink
                        to="/register"
                        style={({ isActive, isPending, isTransitioning }) => ({
                            fontSize: "15px",
                            textDecoration: isActive ? "underline" : "none",
                        })}
                    >
                        Olvidar Contraseña
                    </NavLink>
                    */}
                </nav>
            </section>
        )}
    </>
    )
}

