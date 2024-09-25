import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

const Exercise10 = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dados, setDados] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!nome || !email) {
      setError('Os campos nome e email devem ser preenchidos!');
      return;
    }

    if (telefone && isNaN(telefone)) {
      setError('O campo telefone deve ser numérico!');
      return;
    }

    setError(''); 
    const dadosJSON = { nome, email, telefone };
    setDados(dadosJSON); 
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">Meu form com validações</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          style={{ marginBottom: '10px' }}
          required 
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px' }}
          required 
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          style={{ marginBottom: '10px' }}
          type="tel" 
        />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>

      {error && (
        <Typography variant="body2" color="error" style={{ marginTop: '10px' }}>
          {error}
        </Typography>
      )}

      {dados && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h6">Dados enviados:</Typography>
          <Typography variant="body1">{JSON.stringify(dados)}</Typography> 
        </div>
      )}
    </Container>
  );
};

export default Exercise10;
