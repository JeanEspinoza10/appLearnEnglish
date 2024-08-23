import React from 'react';
import "tailwindcss/tailwind.css"
import { FormLogin } from "./components/form/FormLogin.jsx";
import { FormRegister } from "./components/form/FormRegister.jsx";
import { MainHeader } from './components/structure/MainHeader.jsx';

/*
Render My Application
*/

const functionInitial = () => {
  console.log("incial");
};

function App() {
  return (
    <>  
      <MainHeader/>
    </>
  )
}

export default App
