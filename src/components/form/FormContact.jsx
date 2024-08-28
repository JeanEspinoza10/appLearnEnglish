import React from "react";
import { useState } from "react";
import "./form.css";

export const FormContact = () => {
    const [formState, setformState] = useState({
        name:"",
        last_name:"",
        email: "",
        phone:"",
        message:"",
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando");
  };

  //Control value for inputs
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

  return (
    <>
      <section className="container-form-contact">
        <div className="container-modal">
          <div className="heading">Contacto</div>
          <form className="formContact" onSubmit={handleSubmit}>
                <div className="form-email">
                    <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Correo"
                        required
                        autoComplete="username"
                    />
                </div>
                <div className="form-name">
                    <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Nombre"
                        required
                        autoComplete="name"
                    />
                </div>
                <div className="form-last-name">
                    <input
                        type="text"
                        id="form-last-name"
                        name="last_name"
                        value={formState.last_name}
                        onChange={handleChange}
                        placeholder="Apellidos"
                        required
                        autoComplete="last_name"
                    />
                </div>
                <div className="form-phone">
                    <input
                        type="text"
                        id="form-phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="Teléfono"
                        required
                        autoComplete="phone"
                    />
                </div>
                <div className="form-message">
                    <textarea
                        type="text"
                        id="form-message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Mensaje"
                        required
                        autoComplete="message"
                    />
                </div>
                <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
    </>
  );
};
