import React, { useState } from 'react';

export const Firmas = () => {
    const [formData, setFormData] = useState({
        firmaUsuario: '',
        firmaTecnico: '',
        firmaAtencion: '',
        firmaJefe: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <table>
              <div style={{ border: '1px solid black', padding: '-70px', marginTop: '-10px' }}>
            <tbody>
                <tr>
                    <th style={{ fontSize: '15px' }}>
                        <center>USUARIO</center>
                    </th>
                    <th style={{ fontSize: '15px' }}>
                        <center>REPRESENTANTE SOPORTE TI</center>
                    </th>
                </tr>
                <tr>
                    <th style={{ color: '#DA1C09', height: '100px' }}>Firma:</th>
                    <th style={{ color: '#DA1C09', height: '100px' }}>Firma:</th>
                </tr>
                <tr>
                    <th style={{ color: '#DA1C09', fontSize: '15px' }}>
                        Nombre completo:{' '}
                        <input
                            type="text"
                            name="firmaUsuario"
                            value={formData.firmaUsuario}
                            onChange={handleInputChange}
                            maxLength="60"
                            autoComplete="off"
                            required
                            style={{ width: '100%' }}
                        />
                    </th>
                    <th style={{ color: '#DA1C09', fontSize: '15px' }}>
                        Nombre completo:{' '}
                        <input
                            type="text"
                            name="firmaTecnico"
                            value={formData.firmaTecnico}
                            onChange={handleInputChange}
                            maxLength="60"
                            autoComplete="off"
                            required
                            style={{ width: '100%' }}
                        />
                    </th>
                </tr>
                <tr>
                    <th style={{ fontSize: '15px' }}>
                        <center>ATENCIÓN AL TRABAJADOR</center>
                    </th>
                    <th style={{ fontSize: '15px' }}>
                        <center>JEFE INMEDIATO</center>
                    </th>
                </tr>
                <tr>
                    <th style={{ color: '#DA1C09', height: '100px' }}>Firma:</th>
                    <th style={{ color: '#DA1C09', height: '100px' }}>Firma:</th>
                </tr>
                <tr>
                    <th style={{ color: '#DA1C09', fontSize: '15px' }}>
                        Nombre completo:{' '}
                        <input
                            type="text"
                            name="firmaAtencion"
                            value={formData.firmaAtencion}
                            onChange={handleInputChange}
                            maxLength="60"
                            autoComplete="off"
                            style={{ width: '100%' }}
                        />
                    </th>
                    <th style={{ color: '#DA1C09', fontSize: '15px' }}>
                        Nombre completo:{' '}
                        <input
                            type="text"
                            name="firmaJefe"
                            value={formData.firmaJefe}
                            onChange={handleInputChange}
                            maxLength="60"
                            autoComplete="off"
                            style={{ width: '100%' }}
                        />
                    </th>
                </tr>
            </tbody>
            </div>
        </table>
    );
};

