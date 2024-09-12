import React, { useState } from 'react';

export const EquipoNew = () => {
    const [formData, setFormData] = useState({
        desktop_n: false,
        laptop_n: false,
        tablet_n: false,
        placa_n: '',
        marca_n: '',
        disco_n: '',
        serial_n: '',
        modelo_n: '',
        memoria_n: '',
        nombre_equipo_n: '',
        mac_n: '',
        ip_n: '',
        placamon_n: '',
        marcamon_n: '',
        puntored_n: '',
        serialmon_n: '',
        modelomon_n: '',
        otroscelular_n: '',
        placaotros_n: '',
        marcaotros_n: '',
        serialotros_n: '',
        modelootros_n: '',
        maletin_n: false,
        base_n: false,
        teclado_n: false,
        cam_n: false,
        diadema_n: false,
        adaptador_n: false,
        guaya_n: false,
        docking_n: false,
        raton_n: false,
        otros_n: '',
        observacion_n: '',
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    return (
        <div style={{ marginTop: '-10px' }}>
            <h2>DATOS EQUIPOS, CELULARES Y HERRAMIENTAS DE TRABAJO</h2>
            <h2>DATOS DEL EQUIPO NUEVO</h2>
            <form id="formularion" onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td rowSpan="3" style={{ width: '240px' }}>
                                <b>Tipo de Elemento:</b>
                                <p>
                                    Escritorio: <input type="checkbox" name="desktop_n" checked={formData.desktop_n} onChange={handleChange} />
                                    <br />
                                    Portátil: <input type="checkbox" name="laptop_n" checked={formData.laptop_n} onChange={handleChange} />
                                    <br />
                                    Tablet: <input type="checkbox" name="tablet_n" checked={formData.tablet_n} onChange={handleChange} />
                                </p>
                            </td>
                            <td><b>Placa:</b></td>
                            <td><input type="text" name="placa_n" value={formData.placa_n} onChange={handleChange} required /></td>
                            <td><b>Marca:</b></td>
                            <td>
                                <select name="marca_n" value={formData.marca_n} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="HEWLETT-PACKARD">HEWLETT-PACKARD</option>
                                    <option value="LENOVO">LENOVO</option>
                                    <option value="ASUS">ASUS</option>
                                    <option value="ACER">ACER</option>
                                    <option value="DELL">DELL</option>
                                    <option value="TOUCH DYNAMIC">TOUCH DYNAMIC</option>
                                    <option value="APPLE">APPLE</option>
                                </select>
                            </td>
                            <td><b>Disco Duro (GB):</b></td>
                            <td><input type="text" name="disco_n" value={formData.disco_n} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><b>S/N:</b></td>
                            <td><input type="text" name="serial_n" value={formData.serial_n} onChange={handleChange} required /></td>
                            <td><b>Modelo:</b></td>
                            <td><input type="text" name="modelo_n" value={formData.modelo_n} onChange={handleChange} required /></td>
                            <td><b>Memoria RAM:</b></td>
                            <td><input type="text" name="memoria_n" value={formData.memoria_n} onChange={handleChange} required /></td>
                        </tr>
                        <tr>
                            <td><b>Nombre de Máquina:</b></td>
                            <td><input type="text" name="nombre_equipo_n" value={formData.nombre_equipo_n} onChange={handleChange} required /></td>
                            <td><b>MAC:</b></td>
                            <td><input type="text" name="mac_n" value={formData.mac_n} onChange={handleChange} required /></td>
                            <td><b>Dirección IP:</b></td>
                            <td><input type="text" name="ip_n" value={formData.ip_n} onChange={handleChange} /></td>
                        </tr>

                        {/* Monitor Section */}
                        <tr>
                            <td rowSpan="2"><b>Monitor:</b></td>
                            <td><b>Placa:</b></td>
                            <td><input type="text" name="placamon_n" value={formData.placamon_n} onChange={handleChange} /></td>
                            <td><b>Marca:</b></td>
                            <td>
                                <select name="marcamon_n" value={formData.marcamon_n} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="HEWLETT-PACKARD">HEWLETT-PACKARD</option>
                                    <option value="LENOVO">LENOVO</option>
                                    <option value="ASUS">ASUS</option>
                                    <option value="ACER">ACER</option>
                                    <option value="DELL">DELL</option>
                                    <option value="TOUCH DYNAMIC">TOUCH DYNAMIC</option>
                                    <option value="APPLE">APPLE</option>
                                </select>
                            </td>
                            <td><b>Punto de red:</b></td>
                            <td><input type="text" name="puntored_n" value={formData.puntored_n} onChange={handleChange} /></td>
                        </tr>
                        <tr>
                            <td><b>S/N:</b></td>
                            <td><input type="text" name="serialmon_n" value={formData.serialmon_n} onChange={handleChange} /></td>
                            <td><b>Modelo:</b></td>
                            <td><input type="text" name="modelomon_n" value={formData.modelomon_n} onChange={handleChange} /></td>
                        </tr>

                        {/* Accesorios Section */}
                        <tr>
                            <td><b>Otros Dispositivos (Celular):</b></td>
                            <td><input type="text" name="otroscelular_n" value={formData.otroscelular_n} onChange={handleChange} /></td>
                            <td><b>Placa:</b></td>
                            <td><input type="text" name="placaotros_n" value={formData.placaotros_n} onChange={handleChange} /></td>
                            <td><b>Marca:</b></td>
                            <td>
                                <select name="marcaotros_n" value={formData.marcaotros_n} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="HEWLETT-PACKARD">HEWLETT-PACKARD</option>
                                    <option value="LENOVO">LENOVO</option>
                                    <option value="ASUS">ASUS</option>
                                    <option value="ACER">ACER</option>
                                    <option value="DELL">DELL</option>
                                    <option value="TOUCH DYNAMIC">TOUCH DYNAMIC</option>
                                    <option value="APPLE">APPLE</option>
                                </select>
                            </td>
                        </tr>

                        {/* Observaciones */}
                        <tr>
                            <td colSpan="6">
                                <b>Observaciones:</b>
                                <input type="text" name="observacion_n" value={formData.observacion_n} onChange={handleChange} placeholder="OBSERVACIONES:" />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="6">
                                <button type="submit">Enviar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}