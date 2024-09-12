import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Login } from "../pages/login/login"
import { RegisterUser } from "../pages/registrar_usuario/RegisterUser"
import { RegisterPc } from "../pages/registrar_pc/RegisterPc"
import { CreateActa } from "../pages/crear_acta/CreateActa"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/registrarusuario" element={<RegisterUser/>}/>
            <Route exact path="/registrarserial" element={<RegisterPc/>}/>
            <Route exact path="/crearacta" element={<CreateActa/>}/>
        </Routes>
    </BrowserRouter>
        
  )
}

export default App
