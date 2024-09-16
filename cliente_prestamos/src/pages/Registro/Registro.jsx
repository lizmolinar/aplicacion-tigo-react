import { NavLink } from 'react-router-dom';
import './Registro.css'

const Registro = () => {
    return(
        <>
            <div className='container-fluid contenedor-registro d-flex justify-content-center align-items-center vh-100 bg-light'>
                <div className='bg-white px-5 py-3 text-secondary shadow registro-box mt-3 '>
                    <p className='text-center fs-3 fw-bold'>Registrate</p>
                    <div className='row d-flex'>
                        <div className='col'>
                            <form action="">
                                <label htmlFor="username">Nombre completo</label>
                                <input type="text" placeholder="Nombres" className="inputs" />
                                <label htmlFor="mail">Correo Electronico</label>
                                <input type="text" placeholder="Ingrese su correo Electronico" className="inputs" />
                                <label htmlFor="password">Contraseña</label>
                                <input type="password" placeholder="Ingrese la contraseña" className="inputs" />
                                <div className='btn btn-warning text-white w-100 mt-4 fw-semibold shadow-sm boton'>Iniciar</div>
                                <div className='d-flex gap-1 justify-content-center mt-1'>
                                    <p>Ya tienes una cuenta?</p>
                                    <NavLink to='/login' className='text-decoration-none text-info fw-semibold'>
                                        Iniciar Sesion
                                    </NavLink>
                                </div>
                                <hr />
                                <input type="checkbox" id="checkbox2" value="Basket" /> Enviar notificaciones al correo o por SMS <br />
                                <input type="checkbox" id="checkbox1" value="Futbol" /> He leido y acepto los <a href="#">terminos y
                                    condiciones</a> y autorizo la <a>proteccion de datos</a> <br />
                                <hr />
                                <p className='text-center'>Volver  a la 
                                <NavLink to='/'>Pagina Principal</NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Registro;