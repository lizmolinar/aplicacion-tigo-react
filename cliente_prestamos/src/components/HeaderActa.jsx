import React, { useState } from 'react';
import logo from "../assets/colsubsidio.jpg"

export const HeaderActa = () => {
    const [formData, setFormData] = useState({
        asignacion: false,
        renovacion: false,
        retiro: false,
        prestamo: false,
        ciudad: '',
        ticket: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };

    return (
        <div>
      <table>
        <tbody>
          <tr>
            <td>
              <center>
                <img src={logo} className="imagen2" alt="Logo" />
              </center>
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td rowSpan="3">
              <center>
                <b>
                  <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}> 
                    <br />
                    ANEXO DE ENTREGAS AL TRABAJADOR DE EQUIPOS, HERRAMIENTAS Y FACILIDADES OPERATIVAS
                  </div>
                </b>
              </center>
            </td>
            <td>
              <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
                Asignación
                <input
                  type="checkbox"
                  name="asignacion"
                  checked={formData.asignacion}
                  onChange={handleInputChange}
                />
                Renovación
                <input
                  type="checkbox"
                  name="renovacion"
                  checked={formData.renovacion}
                  onChange={handleInputChange}
                />
                Retiro
                <input
                  type="checkbox"
                  name="retiro"
                  checked={formData.retiro}
                  onChange={handleInputChange}
                />
                Prestamo
                <input
                  type="checkbox"
                  name="prestamo"
                  checked={formData.prestamo}
                  onChange={handleInputChange}
                />
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: '460px' }}>
            <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
              <b>Ciudad: </b>
              <input
                type="text"
                name="ciudad"
                className="p_red"
                value={formData.ciudad}
                style={{ width: '155px' }}
                onChange={handleInputChange}
                maxLength="10"
                autoComplete="off"
              />
            </div>
            </td>
          </tr>
          <tr>
            <td style={{ width: '460px' }}>
            <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
              <b>Oc o Ticket: </b>
              <input
                type="text"
                name="ticket"
                className="p_red"
                value={formData.ticket}
                style={{ width: '155px' }}
                onChange={handleInputChange}
                maxLength="10"
                autoComplete="off"
              />
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    )
}