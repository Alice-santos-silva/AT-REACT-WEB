import React, { useEffect, useState } from 'react';
import { Container, Typography, Select, MenuItem } from '@mui/material';

const Exercise06 = ({ onChange }) => {
  const [paises, setPaises] = useState([]); 
  const [paisEscolhido, setPaisEscolhido] = useState(''); 

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all') 
      .then((response) => response.json()) 
      .then((data) => setPaises(data)) 
      .catch((error) => console.error('Erro ao buscar os países:', error)); 
  }, []);

  const handleChange = (event) => {
    setPaisEscolhido(event.target.value);
    if (onChange) {
      onChange(event.target.value); 
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">Selecione um País</Typography>
      <Select
        value={paisEscolhido} 
        onChange={handleChange} 
        style={{ marginTop: '20px', width: '100%' }}
      >
        {paises.map((pais) => (
          <MenuItem key={pais.cca3} value={pais.name.common}>
            {pais.name.common}
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
};

export default Exercise06;
