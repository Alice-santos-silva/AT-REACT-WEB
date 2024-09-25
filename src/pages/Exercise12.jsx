import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const Exercise12 = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    reset(); 
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">React Hook Form com validações</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Nome"
          variant="outlined"
          fullWidth
          {...register('nome', { required: 'O campo nome é obrigatório!' })}
          style={{ marginBottom: '10px' }}
          error={!!errors.nome}
          helperText={errors.nome ? errors.nome.message : ''}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          {...register('email', { 
            required: 'O campo email é obrigatório!',
          })}
          style={{ marginBottom: '10px' }}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          label="Telefone"
          variant="outlined"
          fullWidth
          {...register('telefone', { 
            validate: (value) => !value || !isNaN(value) || 'O campo telefone deve ser numérico!'
          })}
          style={{ marginBottom: '10px' }}
          error={!!errors.telefone}
          helperText={errors.telefone ? errors.telefone.message : ''}
        />
        <Button variant="contained" color="primary" type="submit">
          Enviar
        </Button>
      </form>
    </Container>
  );
};

export default Exercise12;
