import React from 'react';
import './UserAccount.css';
import img1 from '../../assets/busquedaser.png'
import img2 from '../../assets/usuarios.png'
import img3 from '../../assets/acta.png'
import { NavLink } from 'react-router-dom';


const UserAccount = () => {
    return (
        <>
            <div class="container usercontainer">
                <p class="text-center fs-2 fw-bold">¿Que quieres hacer?</p>
                <div class="row">
                    <div class="col-sm-4">
                    <NavLink to="/buscar" className="text-decoration-none"> {}
                        <div class="card rounded-1 card1">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img class="img-fluid img-adaptation" src={img1} alt="" />
                                    </div>
                                    <div class="col">
                                        <h5 class="card-title">Busqueda por Serial</h5>
                                        <p class="card-text">Aqui podras encontrar por numero de serial tu acta</p>
                                    </div>
                                </div>
                              </div>
                        </div>
                        </NavLink>
                    </div>
                    <div className="col-sm-4">
                        <NavLink to="/registrarusu" className="text-decoration-none"> {}
                            <div className="card rounded-1 card1">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <img className="img-adaptation img-fluid" src={img2} alt="Usuarios" />
                                        </div>
                                        <div className="col">
                                            <h5 className="card-title">Usuarios</h5>
                                            <p className="card-text">Crear, editar y validar usuario</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div class="col-sm-4">
                    <NavLink to="/crearacta" className="text-decoration-none"> {}
                        <div class="card rounded-1 card1">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-4">
                                        <img class="img-fluid img-adaptation" src={img3} alt="" />
                                    </div>
                                    <div class="col">
                                        <h5 class="card-title">Actas</h5>
                                        <p class="card-text">Creacion de actas anexo de entregas al trabajador de equipos, herramientas y facilidades operativas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </NavLink>
                    </div>
               </div>
                <div class="row">

                </div>
            </div>
        </>
    )
}

export default UserAccount;