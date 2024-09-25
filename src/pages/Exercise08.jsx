import React, { useEffect, useState } from 'react';
import { Container, Typography, Select, MenuItem, Box } from '@mui/material';

const Exercise08 = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then((response) => response.json())
      .then((data) => setCategorias(data.categories))
      .catch((error) => console.error('Erro:', error));
  }, []);

  const handleChange = (event) => {
    const categoria = event.target.value;
    setCategoriaSelecionada(categoria);
   
    const catEncontrada = categorias.find(cat => cat.strCategory === categoria);

    if (catEncontrada) {
      setDescricao(catEncontrada.strCategoryDescription);
      setImagem(catEncontrada.strCategoryThumb);
    }
  };

  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h5">Selecione uma categoria de um dos pratos</Typography>
      <Select
        value={categoriaSelecionada}
        onChange={handleChange}
        style={{ marginTop: '20px', width: '100%' }}
      >
        {categorias.map((categoria) => (
          <MenuItem key={categoria.idCategory} value={categoria.strCategory}>
            {categoria.strCategory}
          </MenuItem>
        ))}
      </Select>

      {descricao && (
        <Box style={{ marginTop: '20px' }}>
          <Typography variant="h6">{categoriaSelecionada}</Typography>
          <img src={imagem} alt={categoriaSelecionada} style={{ width: '100%', height: 'auto' }} />
          <Typography variant="body2">{descricao}</Typography>
        </Box>
      )}
    </Container>
  );
};

export default Exercise08;
