import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Exercise09 = ({ setDados }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  
  const [dadosJSON, setDadosJSON] = useState(null); 

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const newDadosJSON = { nome, email, telefone }; 
    setDados(newDadosJSON); 
    setDadosJSON(newDadosJSON); 
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">Form Simples</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          style={{ marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>

      {dadosJSON && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">JSON:</Typography>
          <Typography variant="body1">{JSON.stringify(dadosJSON)}</Typography> 
        </div>
      )}
    </Container>
  );
};

export default Exercise09;
