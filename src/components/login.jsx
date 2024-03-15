import React, { useState } from 'react';
import axios from 'axios';
import CarTable from './CarTable';

function Login({ onLoginSuccess }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:3001/login', {
          login: username,
          password: password
        });
    
        setLoggedIn(true);
        onLoginSuccess(); 
      } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('Ocurrió un error al procesar la solicitud');
        }
      }
    };
  
    const handleCancel = () => {
      window.alert('Inicio de sesión cancelado');
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        {!loggedIn && (
          <>
            <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '24px' }}>Iniciar Sesión</div>
            <form onSubmit={handleSubmit} style={{ display: 'inline-block', padding: '20px', borderRadius: '10px' }}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '20px', fontWeight: 'bold', display: 'block' }}>Nombre de Usuario:</label>
                <input type="text" value={username} onChange={handleUsernameChange} style={{ width: '250px', height: '40px', fontSize: '18px', backgroundColor: '#f2f2f2' }} />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ fontSize: '20px', fontWeight: 'bold', display: 'block' }}>Contraseña:</label>
                <input type="password" value={password} onChange={handlePasswordChange} style={{ width: '250px', height: '40px', fontSize: '18px', backgroundColor: '#f2f2f2' }} />
              </div>
              <div>
                <button type="submit" style={{ height: '53px', width: '253px', marginRight: '20px', backgroundColor: '#003B93', fontSize: '20px', borderRadius: '5px', color: '#fff' }}>Ingresar</button>
                <button type="button" onClick={handleCancel} style={{ height: '53px', width: '253px', backgroundColor: '#E75D5D', fontSize: '20px', borderRadius: '5px', color: '#fff' }}>Cancelar</button>
              </div>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </>
        )}
        {loggedIn && <CarTable />}
      </div>
    );
  }
export default Login;

