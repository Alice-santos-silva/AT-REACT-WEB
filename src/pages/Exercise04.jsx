import React, { useState } from "react";
import {  Typography, Button, Box, Collapse } from "@mui/material";

const Exercise04 = ({ pergunta, resposta }) => {
  const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };

    return (
      <Box
        sx={{
          maxWidth: 600,
          margin: "auto",
          padding: 2,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          bgcolor: "#f9f9f9"
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          {pergunta}
        </Typography>
        <Collapse in={open}>
          <Box
            sx={{
              padding: 2,
              border: "1px solid #ddd",
              borderRadius: 1,
              bgcolor: "#fff",
              boxShadow: 1,
              mt: 2
            }}
          >
            <Typography variant="body1">
              {resposta}
            </Typography>
          </Box>
        </Collapse>
        <Button
          variant="contained"
          color="primary"
          onClick={handleToggle}
          sx={{ mt: 2, backgroundColor: '#9F6391' }}
        >
          {open ? "Ocultar Resposta" : "Mostrar Resposta"}
        </Button>
      </Box>
    );
  };

  

export default Exercise04;
