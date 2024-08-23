import { useState } from "react";
import React from 'react';

export function FormRegister({functionExecute}) {
    
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
    const handleSubmit = (e) => {
        e.preventDefault();
        functionExecute()
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
            <section className="container-login">
                <div className="heading">Registrar</div>
                <form className="formLogin" onSubmit={handleSubmit}>
                    <div className="form-name">
                        <input
                            type="text"
                            id="form-nameRegister"
                            name="nameRegister"
                            value={formState.nameRegister}
                            onChange={handleChange}
                            placeholder="Nombre Apellidos"
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
                    <a href="">Ingresar</a>
                    <a href="">Olvidaste Contraseña</a>
                </nav>
            </section>
        </>
    )
}

