import "../../styles/styles.css"


export const RegisterUser = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center p-3 bg-primary text-white rounded">Bienvenid@</h1>
            <div className="row">
                <form className="col-md-4 bg-light p-4 rounded shadow-sm" method="POST">
                    <h3 className="text-center text-secondary mb-4">Registro de Usuarios</h3>
                    <div className="mb-3">
                        <label className="form-label">Id</label>
                        <input type="text" className="form-control" name="ID" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre del usuario</label>
                        <input type="text" className="form-control" name="nombre" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Propiedad</label>
                        <select className="form-select" name="propiedad" id="propiedad" required>
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option value="opcion1">Colsubsidio</option>
                            <option value="opcion2">PCCOM</option>
                            <option value="opcion3">Otros</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Identificación</label>
                        <input type="text" className="form-control" name="cedula" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Celular</label>
                        <input type="text" className="form-control" name="celular" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Cargo</label>
                        <input type="text" className="form-control" name="cargo" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Centro de costos</label>
                        <input type="text" className="form-control" name="costos" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Centro logístico</label>
                        <input type="text" className="form-control" name="logistico" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Sede</label>
                        <input type="text" className="form-control" name="sede" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Dirección</label>
                        <input type="text" className="form-control" name="direccion" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ubicación</label>
                        <input type="text" className="form-control" name="ubicacion" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Jefe Inmediato</label>
                        <input type="text" className="form-control" name="jefe" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gerencia</label>
                        <input type="text" className="form-control" name="gerencia" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Usuario de Red</label>
                        <input type="text" className="form-control" name="usuario_red" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Modalidad de trabajo</label>
                        <select className="form-select" name="modalidad" id="modalidad" required>
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option value="opcion1">Presencial</option>
                            <option value="opcion2">Teletrabajo Autonomo</option>
                            <option value="opcion3">Teletrabajo Suplementario</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Facilidades operativas</label>
                        <select className="form-select" name="operativas" id="operativas" required>
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option value="opcion1">Carnet</option>
                            <option value="opcion2">Tarjeta de acceso</option>
                            <option value="opcion3">Otros</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Tipo de contrato del usuario</label>
                        <select className="form-select" name="contrato" id="contrato" required>
                            <option value="" disabled selected>Selecciona una opción</option>
                            <option value="opcion1">Trabajador</option>
                            <option value="opcion2">Estudiante en práctica</option>
                            <option value="opcion3">Contratista</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary w-100" name="btnregistrar" value="ok">Crear</button>    
                </form>

                <div className="col-md-8 p-3">
                    <div className="table-responsive shadow-sm rounded">
                        <table className="table table-bordered table-hover">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre del usuario</th>
                                    <th scope="col">Propiedad del equipo</th>
                                    <th scope="col"># Identificación</th>
                                    <th scope="col"># Celular</th>
                                    <th scope="col">Cargo</th>
                                    <th scope="col">Centro de costos</th>
                                    <th scope="col">Centro logístico</th>
                                    <th scope="col">Sede</th>
                                    <th scope="col">Dirección</th>
                                    <th scope="col">Ubicación</th>
                                    <th scope="col">Jefe Inmediato</th>
                                    <th scope="col">Gerencia</th>
                                    <th scope="col">Usuario de Red</th>
                                    <th scope="col">Modalidad de trabajo</th>
                                    <th scope="col">Facilidades operativas</th>
                                    <th scope="col">Tipo de contrato</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Nombre</td>
                                    <td>Propiedad</td>
                                    <td>Identificación</td>
                                    <td>Celular</td>
                                    <td>Cargo</td>
                                    <td>Centro de costos</td>
                                    <td>Centro logístico</td>
                                    <td>Sede</td>
                                    <td>Dirección</td>
                                    <td>Ubicación</td>
                                    <td>Jefe Inmediato</td>
                                    <td>Gerencia</td>
                                    <td>Usuario de Red</td>
                                    <td>Modalidad</td>
                                    <td>Facilidades operativas</td>
                                    <td>Tipo de contrato</td>
                                    <td>
                                        <button className="btn btn-warning btn-sm mx-1"><i className="fa-solid fa-pen-to-square"></i></button>
                                        <button className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}