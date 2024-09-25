import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const Exercise02 = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="body1">Clique no botão para ter uma surpresa...</Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => alert('SURPRESAA :)')} 
        style={{ marginTop: '20px' }}
      >
        click com inline event
      </Button>
    </Container>
  );
};

export default Exercise02;
