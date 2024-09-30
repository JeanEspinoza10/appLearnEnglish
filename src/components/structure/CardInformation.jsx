import React from 'react'
import { useAuth } from "@components/auth/Auth";
import { Button } from "@components/buttons/Button";
import { useNavigate } from "react-router-dom";
import './cardInformation.css'
export const CardInformation = () => {
    const {user,setUser, setisAuthenticated} = useAuth()
    const navigate = useNavigate();
    const logOut = () => {
        localStorage.removeItem('myData');
        setisAuthenticated(false);
        setUser({
            name:'',
            email:'',
            jwt:''
          })
        navigate("/login");
          
    }
  return (
    <section className='cardInformation-header'>
        <h2>Bienvenido, {user.name}.</h2>
        <Button name= {'Salir'} executeFunction={logOut} />
    </section>
  )
}
