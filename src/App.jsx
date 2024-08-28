import React, { useContext, useState } from "react";

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
import { FilterList } from "./components/core/FilterList.jsx";


/*
Render My Application
*/

function App() {
  // State controller render of login,service,contact,Support
  const [accesLogin, setaccesLogin] = useState(false);
  
  
  return (
    <>
      <BrowserRouter>
        <MainHeader accesLogin={accesLogin} setaccesLogin={setaccesLogin} />
        <main id="container-main-render">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<FormContact />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/register" element={<FormRegister />} />
            <Route path="/learning" element ={<Learning/>}/>

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
