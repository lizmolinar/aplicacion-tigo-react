import React, { useState } from 'react';

export const Aplicaciones = () => {
    const [formData, setFormData] = useState({
        sistema_a: '',
        sistema_n: '',
        activ_a: '',
        activ_n: '',
        version_a: '',
        version_n: '',
        antivirus_a: '',
        antivirus_n: '',
        system_a: '',
        system_n: '',
        remote_a: '',
        remote_n: '',
        dominio_a: '',
        dominio_n: '',
        datos: '',
        tamaño1: '',
        tamaño2: '',
        tamaño3: '',
        C: '',
        D: '',
        ingresoRed: false,
        onedrive: false,
        email: false,
        voice: false,
        mapeo: false,
        impresora: false,
        vpn: false,
        usb: false,
        sap: false,
        google: false,
        sharepoint: false,
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    return (
        <table style={{ marginTop: '-10px' }}>
            <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
             <tbody>
                <tr>
                    <td colSpan="2" style={{ width: '240px' }}>
                        <b>
                            <center>SOFTWARE</center>
                        </b>
                    </td>
                    <td colSpan="1.5" style={{ width: '240px' }}>
                        <b>
                            <center>EQUIPO ANTERIOR</center>
                        </b>
                    </td>
                    <td colSpan="1.5" style={{ width: '240px' }}>
                        <b>
                            <center>EQUIPO NUEVO</center>
                        </b>
                    </td>
                    <td colSpan="2" style={{ width: '240px' }}>
                        <b>
                            <center>Datos, Correo e Internet</center>
                        </b>
                    </td>
                    <td colSpan="2" style={{ width: '240px' }}>
                        <b>
                            <center>Tamaño</center>
                        </b>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ width: '460px' }}>
                        <b>Sistema Operativo:</b>
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="sistema_a"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="sistema_n"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="2">
                        <input
                            className="input_in"
                            type="text"
                            name="datos"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="2">
                        <input
                            className="input_in"
                            type="text"
                            name="tamaño1"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ width: '460px' }}>
                        <b>Activación (Windows / Office):</b>
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="activ_a"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="activ_n"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="2">
                        <b>
                            <center>Tamaño Total de las Unidades de Disco</center>
                        </b>
                    </td>
                    <td colSpan="2">
                        <b>
                            <center>Tamaño</center>
                        </b>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ width: '460px' }}>
                        <b>Versionamiento Office:</b>
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="version_a"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="version_n"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="2">
                        <b>
                            C: <input className="input_in" name="C" maxLength="60" autoComplete="off" />
                        </b>
                    </td>
                    <td colSpan="2">
                        <input
                            className="input_in"
                            type="text"
                            name="tamaño2"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ width: '460px' }}>
                        <b>Agente Antivirus:</b>
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="antivirus_a"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="antivirus_n"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="2">
                        <b>
                            D: <input className="input_in" name="D" maxLength="60" autoComplete="off" />
                        </b>
                    </td>
                    <td colSpan="2">
                        <input
                            className="input_in"
                            type="text"
                            name="tamaño3"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ width: '460px' }}>
                        <b>Agente system center configuration Manager:</b>
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="system_a"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="system_n"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="4">
                        <b>
                            <center>PRUEBAS ADICIONALES</center>
                        </b>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ width: '460px' }}>
                        <b>Agente Remote Control Viewer:</b>
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="remote_a"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="remote_n"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1">
                        <b>Ingreso a la Red</b>
                        <input type="checkbox" name="ingresored" />
                    </td>
                    <td colSpan="1">
                        <b>Acceso a OneDrive</b>
                        <input type="checkbox" name="onedrive" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" style={{ width: '460px' }}>
                        <b>Directiva de Grupo Controlador de Dominio:</b>
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="dominio_a"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1.5">
                        <input
                            className="input_in"
                            type="text"
                            name="dominio_n"
                            maxLength="60"
                            autoComplete="off"
                        />
                    </td>
                    <td colSpan="1">
                        <b>Correo Electrónico</b>
                        <input type="checkbox" name="email" />
                    </td>
                    <td colSpan="1">
                        <b>Acceso a Voice Mail</b>
                        <input type="checkbox" name="voice" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="4.5"></td>
                    <td colSpan="1">
                        <b>Unidades Mapeadas</b>
                        <input type="checkbox" name="mapeo" />
                    </td>
                    <td colSpan="1">
                        <b>Acceso a Impresora:</b>
                        <input type="checkbox" name="impresora" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="4.5"></td>
                    <td colSpan="1">
                        <b>Acceso VPN:</b>
                        <input type="checkbox" name="vpn" />
                    </td>
                    <td colSpan="1">
                        <b>Puertos USB:</b>
                        <input type="checkbox" name="usb" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="4.5"></td>
                    <td colSpan="1">
                        <b>Acceso a SAP</b>
                        <input type="checkbox" name="sap" />
                    </td>
                    <td colSpan="1">
                        <b>Google Drive</b>
                        <input type="checkbox" name="google" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="4.5"></td>
                    <td colSpan="1">
                        <b>Acceso a SharePoint</b>
                        <input type="checkbox" name="sharepoint" />
                    </td>
                    <td colSpan="1"></td>
                </tr>
            </tbody>
            </div>
        </table>
    );
};

