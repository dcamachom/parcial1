import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
    <div style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '20px', width: '427px',backgroundColor:'#D9D9D9', height:'351px' }}>
      <h2>{carDetail.marca} {carDetail.linea}</h2>
      <img src={carDetail.imagen} alt={carDetail.marca} style={{ maxWidth: '100%', height: 'auto' }} />
      <p>Kilometraje: {carDetail.kilometraje}</p>
      <p>Color: {carDetail.color}</p>
      <p>Referencia: {carDetail.referencia}</p>
    </div>
  );
}

export default CarDetail;
