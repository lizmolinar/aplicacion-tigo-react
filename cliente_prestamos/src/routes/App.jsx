import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar.jsx';
import Login from "../pages/login/Login.jsx";
import Registro from '../pages/Registro/Registro.jsx';
import UserAccount from "../pages/UserAccount/UserAccount.jsx";
import { FormSearch } from "../components/forms/formSearch.jsx";
import { RegisterUser } from "../pages/registrar_usuario/RegisterUser";
import { CreateActa } from "../pages/crear_acta/CreateActa";
import { NextUIProvider } from '@nextui-org/react';

function App() {

  return (

    <NextUIProvider>
      <div className="w-full">
        <h2 className="text-3xl text-center">Hola mundo</h2>
      </div>
    </NextUIProvider>
    // <BrowserRouter>
    //     <Navbar />
    //         <Routes>
    //             <Route exact path='/login' element={<Login />} />
    //             <Route exact path='/registro' element={<Registro />} />
    //             <Route exact path="/home" element={<UserAccount/>}/>
    //             <Route exact path="/buscar" element={<FormSearch/>}/>
    //             <Route exact path="/registrarusu" element={<RegisterUser/>}/>
    //             <Route exact path="/crearacta" element={<CreateActa/>}/>
    //         </Routes>
    // </BrowserRouter>
  )
}

export default App
