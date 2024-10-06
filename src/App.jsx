import React, { useState } from "react";

import { FormLogin } from "./components/form/FormLogin.jsx";
import { FormRegister } from "./components/form/FormRegister.jsx";
import { FormContact } from "./components/form/FormContact.jsx";
import {Home} from "./pages/home/Home.jsx"
import { MainHeader } from "./components/structure/MainHeader.jsx";
import { MainFooter } from "./components/structure/MainFooter.jsx";
import {BrowserRouter,Route, Routes, Navigate } from "react-router-dom";
import { Service } from "./pages/service/Service.jsx";
import { UserLearning } from "./pages/protect/UserLearning.jsx";
import {Learning} from "./pages/learning/Learning.jsx"
import { Protect } from "./components/auth/Protect.jsx";
import { FormPassword } from "./components/form/FormPassword.jsx";
import { FormValidateCode } from "./components/form/FormValidateCode.jsx";

/*
Render My Application
*/

function App() {
  // State controller render of login,service,contact,Support
  
  
  return (
    <>
      <BrowserRouter>
        <MainHeader/>
        <main id="container-main-render">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<FormContact />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/register" element={<FormRegister />} />
            <Route path="/learning" element ={<Learning/>}/>
            <Route path="/password" element ={<FormPassword/>}/>
            <Route
              path="/users"
              element={
                <Protect>
                  <UserLearning />
                </Protect>
              }
            />
          </Routes>
        </main>
        <MainFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
