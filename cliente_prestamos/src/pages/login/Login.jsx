import { NavLink } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className="container-fluid contenedor-login bg-light border-3 d-flex justify-content-center align-items-center vh-100">
                <div className="bg-white p-5 text-secondary shadow login-box">
                    <p className="text-center fs-1 fw-bold">Iniciar Sesion</p>
                    <p className="text-center text-decoration-none text-secondary">Bienvenid@</p>
                    <div className="form" action="">
                        <label>Username</label>
                        <input type="text" placeholder="Enter Username" className="inputs" id='username' />
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password" className="inputs" id='password' />
                        <div className="d-flex justify-content-around mt-1 align-items-center gap-1">
                            <input className="form-check-input" type="checkbox" />
                            <div className="pt-1 text-secondary"><small>Recordarme</small></div>
                            <div className="pt-1 text-decoration-none fst-italic">
                                <small className='text-info'> Olvidaste tu contraseña?</small>
                            </div>                        
                        </div>
                        <NavLink to="/home" className="btn btn-warning text-white w-100 mt-4 fw-semibold shadow-sm boton">
                            Iniciar
                        </NavLink>
                        <div className="d-flex gap-1 justify-content-center mt-1">
                            <p>No tienes una cuenta?</p>
                            <NavLink to='/registro' className="text-decoration-none text-info fw-semibold">
                                Registrate
                            </NavLink>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;