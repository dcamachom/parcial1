import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {FormattedMessage} from 'react-intl';

function CarDetail({ carId }) {
  const [carDetail, setCarDetail] = useState(null);

  useEffect(() => {
    const fetchCarDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/cars/${carId}`);
        setCarDetail(response.data);
      } catch (error) {
        console.error('Error fetching car detail:', error);
      }
    };

    fetchCarDetail();
  }, [carId]);

  if (!carDetail) {
    return <div>Cargando detalle del vehículo...</div>;
  }

  return (
    <div style={{ border: '1px solid black', padding: '20px', width: '400px', height:'300px', backgroundColor:'#D9D9D9', marginLeft:'30px' }}>
      <h2 style={{marginTop:'-10px', fontSize:'18px'}}>{carDetail.marca} {carDetail.linea}</h2>
      <img src={carDetail.imagen} alt={carDetail.marca} style={{ maxwidth: '318px', height: '159px', marginTop:'10px' }} />
      <p style={{ textAlign: 'left', paddingLeft: '30px',fontSize:'18px' }}><span style={{ fontSize: '24px' }}>&#8594;</span><FormattedMessage id="Kilometraje"/>{carDetail.kilometraje}</p>
      <p style={{ textAlign: 'left', paddingLeft: '30px',fontSize:'18px',marginTop:'-30px' }}><span style={{ fontSize: '24px' }}>&#8594;</span><FormattedMessage id="Color"/> {carDetail.color}</p>
      <p style={{ textAlign: 'left', paddingLeft: '30px',fontSize:'18px',marginTop:'-30px'}}><span style={{ fontSize: '24px' }}>&#8594;</span><FormattedMessage id="Referencia"/> {carDetail.referencia}</p>
    </div>
  );
}

export default CarDetail;
