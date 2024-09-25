import React, { useState, useEffect } from 'react';
import { Container, TextField, Typography, List, ListItem } from '@mui/material';
import { faker } from '@faker-js/faker';

const Exercise07 = () => {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    const produtosGerados = Array.from({ length: 100 }, () => faker.commerce.productName());
    setProdutos(produtosGerados);
  }, []);

  const handleChange = (event) => {
    setBusca(event.target.value);
  };

  
  const produtosFiltrados = produtos.filter((produto) =>
    produto.toLowerCase().startsWith(busca.toLowerCase())
  );

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">Filtrar Produtos</Typography>
      <TextField
        label="Digite o nome do produto"
        variant="outlined"
        value={busca}
        onChange={handleChange}
        style={{ marginTop: '20px', width: '100%' }}
      />
      <List>
        {produtosFiltrados.map((produto, index) => (
          <ListItem key={index}>
            {produto}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Exercise07;
