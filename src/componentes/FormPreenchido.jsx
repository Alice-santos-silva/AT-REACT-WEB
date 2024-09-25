import React from 'react';
import { Typography } from '@mui/material';

const FormPreenchido = ({ dados }) => {
  if (!dados) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <Typography variant="h6">Dados enviados:</Typography>
      <Typography variant="body1">Nome: {dados.nome}</Typography>
      <Typography variant="body1">Email: {dados.email}</Typography>
      <Typography variant="body1">Telefone: {dados.telefone}</Typography>
    </div>
  );
};

export default FormPreenchido;
