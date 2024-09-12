import React, { useState } from 'react';

export const DatosUser = () => {
    const [formData, setFormData] = useState({
        fecha: '',
        nombre: '',
        propiedad: '',
        cedula: '',
        celular: '',
        cargo: '',
        costos: '',
        logistico: '',
        sede: '',
        direccion: '',
        ubicacion: '',
        jefe: '',
        gerencia: '',
        usuario_red: '',
        modalidad: '',
        operativas: '',
        contrato: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div>
            <table style={{ marginTop: '-10px' }}>
                <tbody>
                    <tr>
                        <center>
                            <h2>DATOS DEL USUARIO</h2>
                        </center>
                    </tr>
                </tbody>
            </table>

            <table style={{ marginTop: '-10px' }}>
                <tbody>
                    <tr>
                        <td style={{ width: '140px' }}><b>Fecha: </b>
                            <input
                                type="text"
                                name="fecha"
                                value={formData.fecha}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[0-9\/]/)}
                                maxLength="10"
                                autoComplete="off"
                                placeholder="dd/mm/yyyy"
                                required
                            />
                        </td>
                        <td style={{ width: '560px' }}><b>Nombre del Usuario: </b>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z ]/)}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><b>Propiedad del Equipo: </b>
                            <select name="propiedad" value={formData.propiedad} onChange={handleInputChange}>
                                <option>Seleccionar</option>
                                <option>Colsubsidio</option>
                                <option>PCCOM</option>
                                <option>Otro</option>
                            </select>
                        </td>
                        <td style={{ width: '290px' }}><b># Identificación: </b>
                            <input
                                type="text"
                                name="cedula"
                                value={formData.cedula}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[0-9]/)}
                                maxLength="14"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td><b># Celular: </b>
                            <input
                                type="text"
                                name="celular"
                                value={formData.celular}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[0-9]/)}
                                maxLength="12"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><b>Cargo: </b>
                            <input
                                type="text"
                                name="cargo"
                                value={formData.cargo}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z ]/)}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td><b>Centro de costos: </b>
                            <input
                                type="text"
                                name="costos"
                                value={formData.costos}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[0-9]/)}
                                maxLength="9"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td><b>Centro Logistico: </b>
                            <input
                                type="text"
                                name="logistico"
                                value={formData.logistico}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z0-9 \/]/)}
                                maxLength="10"
                                autoComplete="off"
                            />
                        </td>
                    </tr>

                    <tr>
                        <td><b>Sede: </b>
                            <input
                                type="text"
                                name="sede"
                                value={formData.sede}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z0-9 ]/)}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td style={{ width: '180px' }}><b>Dirección: </b>
                            <input
                                type="text"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z0-9 #\-.,]/)}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td><b>Ubicación: </b>
                            <input
                                type="text"
                                name="ubicacion"
                                value={formData.ubicacion}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z0-9 #\-.,]/)}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    <tr>
                        <td style={{ width: '340px' }}><b>Jefe Inmediato: </b>
                            <input
                                type="text"
                                name="jefe"
                                value={formData.jefe}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z ]/)}
                                maxLength="60"
                                autoComplete="off"
                            />
                        </td>
                        <td><b>Gerencia: </b>
                            <input
                                type="text"
                                name="gerencia"
                                value={formData.gerencia}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z ]/)}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td><b>Usuario de red: </b>
                            <input
                                type="text"
                                name="usuario_red"
                                value={formData.usuario_red}
                                onChange={handleInputChange}
                                onKeyPress={(e) => handleKeyPress(e, /[A-Z]/)}
                                maxLength="10"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="6"><b>Modalidad de trabajo: </b>
                            <select name="modalidad" value={formData.modalidad} onChange={handleInputChange}>
                                <option>Seleccionar</option>
                                <option>Presencial</option>
                                <option>Teletrabajo autonomo</option>
                                <option>Teletrabajo suplementario</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="6"><b>facilidades operativas que se entregan: </b>
                            <select name="operativas" value={formData.operativas} onChange={handleInputChange}>
                                <option>Seleccionar</option>
                                <option>Carnet</option>
                                <option>Tarjeta de acceso</option>
                                <option>otros</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="6"><b>Tipo de contrato del usuario: </b>
                            <select name="contrato" value={formData.contrato} onChange={handleInputChange}>
                                <option>Seleccionar</option>
                                <option>Trabajador</option>
                                <option>Estudiante en práctica</option>
                                <option>Contratista</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}