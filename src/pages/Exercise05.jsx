import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, Typography, Container } from '@mui/material';

const Exercise05 = ({ admin }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(admin);
  }, [admin]);

  const handleCheckBox = (event) => {
    setIsAdmin(event.target.checked);
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <FormControlLabel
        control={
          <Checkbox 
            checked={isAdmin} 
            onChange={handleCheckBox} 
            color="primary" 
          />
        }
        label="Administrador"
      />
      <Typography variant="h3">
        {isAdmin ? "O usuário atual é Administrador" : "O usuário atual é Colaborador"}
      </Typography>
    </Container>
  );
};

export default Exercise05;
