import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const Exercise11 = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">React Hook Form simples</Typography>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          {...register('nome')}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register('email')}
          style={{ marginBottom: '10px' }}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          {...register('telefone')}
          style={{ marginBottom: '10px' }}
        />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default Exercise11;
