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
            <h2 style={{ textAlign: 'center' }}>DATOS DEL USUARIO</h2>
            
            <table style={{ marginTop: '-10px', width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                    {/* Primera fila */}
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px', width: '140px' }}>
                            <b>Fecha: </b>
                            <input
                                type="text"
                                name="fecha"
                                value={formData.fecha}
                                onChange={handleInputChange}
                                maxLength="10"
                                autoComplete="off"
                                placeholder="dd/mm/yyyy"
                                required
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px', width: '560px' }}>
                            <b>Nombre del Usuario: </b>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    {/* Segunda fila */}
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Propiedad del Equipo: </b>
                            <select name="propiedad" value={formData.propiedad} onChange={handleInputChange}>
                                <option>Seleccionar</option>
                                <option>Colsubsidio</option>
                                <option>PCCOM</option>
                                <option>Otro</option>
                            </select>
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b># Identificación: </b>
                            <input
                                type="text"
                                name="cedula"
                                value={formData.cedula}
                                onChange={handleInputChange}
                                maxLength="14"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b># Celular: </b>
                            <input
                                type="text"
                                name="celular"
                                value={formData.celular}
                                onChange={handleInputChange}
                                maxLength="12"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    {/* Tercera fila */}
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Cargo: </b>
                            <input
                                type="text"
                                name="cargo"
                                value={formData.cargo}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Centro de costos: </b>
                            <input
                                type="text"
                                name="costos"
                                value={formData.costos}
                                onChange={handleInputChange}
                                maxLength="9"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Centro Logistico: </b>
                            <input
                                type="text"
                                name="logistico"
                                value={formData.logistico}
                                onChange={handleInputChange}
                                maxLength="10"
                                autoComplete="off"
                            />
                        </td>
                    </tr>

                    {/* Cuarta fila */}
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Sede: </b>
                            <input
                                type="text"
                                name="sede"
                                value={formData.sede}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Dirección: </b>
                            <input
                                type="text"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Ubicación: </b>
                            <input
                                type="text"
                                name="ubicacion"
                                value={formData.ubicacion}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    {/* Quinta fila */}
                    <tr>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Jefe Inmediato: </b>
                            <input
                                type="text"
                                name="jefe"
                                value={formData.jefe}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Gerencia: </b>
                            <input
                                type="text"
                                name="gerencia"
                                value={formData.gerencia}
                                onChange={handleInputChange}
                                maxLength="60"
                                autoComplete="off"
                                required
                            />
                        </td>
                        <td style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Usuario de red: </b>
                            <input
                                type="text"
                                name="usuario_red"
                                value={formData.usuario_red}
                                onChange={handleInputChange}
                                maxLength="10"
                                autoComplete="off"
                                required
                            />
                        </td>
                    </tr>

                    {/* Modalidad de trabajo */}
                    <tr>
                        <td colSpan="3" style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Modalidad de trabajo: </b>
                            <select name="modalidad" value={formData.modalidad} onChange={handleInputChange}>
                                <option>Seleccionar</option>
                                <option>Presencial</option>
                                <option>Teletrabajo autónomo</option>
                                <option>Teletrabajo suplementario</option>
                            </select>
                        </td>
                    </tr>

                    {/* Facilidades operativas */}
                    <tr>
                        <td colSpan="3" style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Facilidades operativas que se entregan: </b>
                            <select name="operativas" value={formData.operativas} onChange={handleInputChange}>
                                <option>Seleccionar</option>
                                <option>Carnet</option>
                                <option>Tarjeta de acceso</option>
                                <option>Otros</option>
                            </select>
                        </td>
                    </tr>

                    {/* Tipo de contrato */}
                    <tr>
                        <td colSpan="3" style={{ border: '1px solid black', padding: '10px' }}>
                            <b>Tipo de contrato del usuario: </b>
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
    );
};
