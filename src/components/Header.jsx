import logo from "./logo.png";
import React from 'react';

function Header() {
  return (
      <div style={{ textAlign: 'center' }}> {/* Contenedor central para facilitar la alineación */}
        {/* Título con sombra y alineado a la izquierda */}
        <h1 style={{ 
            textAlign: 'left', 
            marginLeft: '80px', // Ajusta este valor según necesites
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Sombras para el texto
            fontSize:'36px',
            marginBottom:'8px'
        }}>
          TuSegundazo.com
        </h1>
        <hr style={{ margin: '20px 0', width: '1244.02px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
        <img src={logo} alt="logo" style={{
            width: '1244px',
            height: '323px',
            marginBottom: '34px',
            display: 'block', // Necesario para aplicar margin auto en elementos inline
            margin: '0 auto' // Centra la imagen horizontalmente
        }} />
        <hr style={{ margin: '20px 0', width: '1244.02px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
      </div>
  );
}


export default Header;