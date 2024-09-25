import React, { useState } from 'react';
import { Button, TextField, Typography, Container } from '@mui/material';

const Exercise03 = () => {
  const [comida, setComida] = useState('');

  const handleClick = () => {
    if (comida) {
      alert(`A sua comida favorita é ............. ${comida}!`);
    } else {
      alert('Escolha uma comida!');
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="body1">Qual a sua comida favorita?</Typography>
      <TextField
        label="escreva aqui"
        variant="outlined"
        value={comida}
        onChange={(e) => setComida(e.target.value)}
        style={{ marginTop: '20px', marginBottom: '10px', display: 'block' }} 
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleClick}
        style={{ marginTop: '10px', display: 'block' }} 
      >
        Enviar
      </Button>
    </Container>
  );
};

export default Exercise03;
