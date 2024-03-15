import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarDetail from './CardDetail';
import {FormattedMessage} from 'react-intl';

function CarTable() {
  const [cars, setCars] = useState([]);
  const [selectedCarId, setSelectedCarId] = useState(null);

  useEffect(() => {
    // Realizar la solicitud GET para obtener la lista de carros
    axios.get('http://localhost:3001/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error('Error al obtener la lista de carros:', error);
      });
  }, []);

  const handleCarClick = (carId) => {
    setSelectedCarId(carId);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '1' }}>
        <table style={{ width: '787px',height:'340px',borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{backgroundColor:'#333A40',color:'white',height:'49.73px'}}>
              <th style={{ width: '10%'}}>#</th>
              <th style={{ width: '25%',textAlign: 'left',paddingLeft: '10px' }}><FormattedMessage id="Marca"/></th>
              <th style={{ width: '25%',textAlign: 'left',paddingLeft: '10px' }}><FormattedMessage id="Linea"/></th>
              <th style={{ width: '40%',textAlign: 'left',paddingLeft: '10px' }}><FormattedMessage id="Modelo"/></th>
            </tr>
          </thead>
          <tbody>
            {cars.map(car => (
              <tr key={car.id} onClick={() => handleCarClick(car.id)} style={{ cursor: 'pointer' }}>
                <td style={{fontWeight:'bold',height: '50px'}}>{car.id}</td>
                <td style={{ borderBottom: '1px solid #D9D9D9',height: '50px',textAlign: 'left',paddingLeft: '10px'}}>{car.marca}</td>
                <td style={{ borderBottom: '1px solid #D9D9D9',height: '50px',textAlign: 'left',paddingLeft: '10px' }}>{car.linea}</td>
                <td style={{ borderBottom: '1px solid #D9D9D9',height: '50px',textAlign: 'left',paddingLeft: '10px' }}>{car.modelo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedCarId && (
        <div style={{ flex: '1' }}>
          <CarDetail carId={selectedCarId} />
        </div>
      )}
    </div>
  );
}

export default CarTable;
