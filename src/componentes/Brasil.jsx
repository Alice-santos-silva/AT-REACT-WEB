import React, { useEffect, useState } from 'react';
import { Container, Typography, Select, MenuItem } from '@mui/material';

const Brasil = () => {
  const [paises, setPaises] = useState([]); 
  const [paisEscolhido, setPaisEscolhido] = useState('Brasil'); 

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setPaises(data))
      .catch((error) => console.error('Erro ao buscar os países:', error));
  }, []);

  const handleChange = (event) => {
    setPaisEscolhido(event.target.value); 
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">Selecione um País</Typography>
      <Select
        value={paisEscolhido} 
        onChange={handleChange} 
        style={{ marginTop: '20px', width: '100%' }}
      >
        <MenuItem value="Brasil">Brasil</MenuItem>
      </Select>
      
    </Container>
  );
};

export default Brasil;
