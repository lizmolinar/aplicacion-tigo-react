import React, { useState } from 'react';

export const Clausula = () => {
    return (
        <div style={{ marginTop: '10px' }}>
        <table>
        <div style={{ border: '1px solid black', padding: '20px', marginTop: '20px' }}>
            <tbody>
          <tr>
            <td colSpan="3" style={{ color: '#DA1C09', fontSize: '16px' }}>
              <b>Cláusula de tratamiento de datos:</b>
            </td>
            <td colSpan="3">
              <input type="checkbox" name="autorizacion" />
              <label htmlFor="autorizacion">
                Autorizo para recolectar, almacenar y tratar los datos personales suministrados a través de este anexo, conforme lo dispuesto en la ley y demás normatividad aplicable. Igualmente, autorizo la administración de mis datos personales para poder ser contactado para eventos de soporte técnico o consulta de los equipos asignados.
              </label>
            </td>
          </tr>
        </tbody>
        </div>
      </table>
    </div>
  );
};
