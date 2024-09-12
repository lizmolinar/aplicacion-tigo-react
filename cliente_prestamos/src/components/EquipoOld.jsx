import React, { useState } from 'react';

export const EquipoOld = () => {
    const [formData, setFormData] = useState({
        desktop_a: false,
        laptop_a: false,
        tablet_a: false,
        placa_a: '',
        marca_a: '',
        disco_a: '',
        serial_a: '',
        modelo_a: '',
        memoria_a: '',
        nombre_equipo_a: '',
        mac_a: '',
        ip_a: '',
        placamon_a: '',
        marcamon_a: '',
        puntored_a: '',
        serialmon_a: '',
        modelomon_a: '',
        otroscelular_a: '',
        placaotros_a: '',
        marcaotros_a: '',
        serialotros_a: '',
        modelootros_a: '',
        maletin_a: false,
        base_a: false,
        teclado_a: false,
        cam_a: false,
        diadema_a: false,
        adaptador_a: false,
        guaya_a: false,
        docking_a: false,
        raton_a: false,
        otros_a: '',
        observacion_a: '',
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };
    return (
        <div style={{ marginTop: '-20px', marginRight: '-160px' }}>
          
                
                <h2><center>DATOS DEL EQUIPO ANTERIOR (RENOVACIÓN O DEVOLUCIÓN)</center></h2>
        
            <form id="formulario+">
                <table style={{ marginTop: '-10px' }}>
                    <div style={{border: '1px solid black', padding: '20px', marginTop: '20px' }}>

                    <tbody>
                        <tr>
                            <td rowSpan="3" style={{ width: '140px' }}>
                                
                                <b>
                                    <center>Tipo de Elemento:</center>
                                </b>
                                <p style={{ marginLeft: '30px' }}>
                                    <b>
                                        <center>
                                            Escritorio: <input type="checkbox" name="desktop_a" checked={formData.desktop_a} onChange={handleChange} /><br />
                                            Portátil: <input type="checkbox" name="laptop_a" checked={formData.laptop_a} onChange={handleChange} /><br />
                                            Tablet: <input type="checkbox" name="tablet_a" checked={formData.tablet_a} onChange={handleChange} />
                                        </center>
                                    </b>
                                </p>
                            </td>
                            <td><b>Placa:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="placa_a" value={formData.placa_a} onChange={handleChange} maxLength="14" />
                            </td>
                            <td><b>Marca:</b></td>
                            <td>
                                <select className="marca_n" name="marca_a" value={formData.marca_a} onChange={handleChange}>
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
                            <td>
                                <input className="imput_in" type="text" name="disco_a" value={formData.disco_a} onChange={handleChange} maxLength="60" />
                            </td>
                        </tr>
                        <tr>
                            <td><b>S/N:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="serial_a" value={formData.serial_a} onChange={handleChange} maxLength="60" />
                            </td>
                            <td><b>Modelo:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="modelo_a" value={formData.modelo_a} onChange={handleChange} maxLength="60" />
                            </td>
                            <td><b>Memoria RAM:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="memoria_a" value={formData.memoria_a} onChange={handleChange} maxLength="60" />
                            </td>
                        </tr>
                        <tr>
                            <td><b>Nombre de Máquina:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="nombre_equipo_a" value={formData.nombre_equipo_a} onChange={handleChange} maxLength="60" />
                            </td>
                            <td><b>MAC:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="mac_a" value={formData.mac_a} onChange={handleChange} maxLength="60" />
                            </td>
                            <td><b>Dirección IP:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="ip_a" value={formData.ip_a} onChange={handleChange} maxLength="20" />
                            </td>
                        </tr>

                        {/* Monitor Section */}
                        <tr>
                            <td rowSpan="2" style={{ width: '240px' }}>
                                <b>
                                    <center>Monitor:</center>
                                </b>
                            </td>
                            <td><b>Placa:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="placamon_a" value={formData.placamon_a} onChange={handleChange} maxLength="14" />
                            </td>
                            <td><b>Marca:</b></td>
                            <td>
                                <select className="marca_n" name="marcamon_a" value={formData.marcamon_a} onChange={handleChange}>
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
                            <td><b>Punto de Red:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="puntored_a" value={formData.puntored_a} onChange={handleChange} maxLength="60" />
                            </td>
                        </tr>

                        {/* Accesorios Section */}
                        <tr>
                            <td><b>Otros Dispositivos (Celular):</b></td>
                            <td>
                                <input className="imput_in" type="text" name="otroscelular_a" value={formData.otroscelular_a} onChange={handleChange} placeholder="Escribir..." />
                            </td>
                            <td><b>Placa:</b></td>
                            <td>
                                <input className="imput_in" type="text" name="placaotros_a" value={formData.placaotros_a} onChange={handleChange} maxLength="14" />
                            </td>
                            <td><b>Marca:</b></td>
                            <td>
                                <select className="marca_n" name="marcaotros_a" value={formData.marcaotros_a} onChange={handleChange}>
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
                                <b>
                                    <center>Observaciones:</center>
                                </b>
                                <input className="observacion" type="text" name="observacion_a" value={formData.observacion_a} onChange={handleChange} placeholder="OBSERVACIONES:" />
                            </td>
                        </tr>
                      
                    </tbody>
                </div>
                </table>
            </form >
        </div>
    )
}