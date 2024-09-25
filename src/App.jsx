import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ButtonAppBar from './componentes/ButtonAppBar'
import Home from "./Home"
import Exercise01 from './pages/Exercise01';
import Exercise02 from './pages/Exercise02';
import Exercise03 from './pages/Exercise03';
import Exercise04 from './pages/Exercise04';
import Exercise05 from './pages/Exercise05';
import Exercise06 from './pages/Exercise06';
import Exercise07 from './pages/Exercise07';
import Exercise08 from './pages/Exercise08';
import Exercise09 from './pages/Exercise09';
import Exercise10 from './pages/Exercise10';
import Exercise11 from './pages/Exercise11';
import Exercise12 from './pages/Exercise12';
import AdminLigado from './componentes/AdminLigado';
import AdminDesligado from './componentes/AdminDesligado';
import Brasil from './componentes/Brasil';
import FormPreenchido from './componentes/FormPreenchido';

import './App.css';

export default function App() {
  const [dados, setDados] = useState(null); 

  return (
    <div className='containerP'>
      <Router>
        <div className='container01'>
          <ButtonAppBar />
          <div style={{ marginTop: '64px' }}> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="exercise01" element={<Exercise01 pergunta="O que o que é: é muito procurado, mas nunca encontrado?" resposta="O 404 !" />} />
              <Route path='exercise02' element={<Exercise02/>} />
              <Route path='exercise03' element={<Exercise03/>} />
              <Route path="exercise04" element={<Exercise04 pergunta="Quais são as desvantagens de implementar um inline event?" resposta="Um inline event pode complicar a manutenção do código, misturar a lógica de eventos e tornar a reutilização e os testes mais difíceis, além afetar o desempenho." />} />
              <Route path='exercise05' element={<Exercise05/>} />
              <Route path='exercise06' element={<Exercise06/>} />
              <Route path='exercise07' element={<Exercise07/>} />
              <Route path='exercise08' element={<Exercise08/>} />
              <Route path='exercise09' element={<Exercise09 setDados={setDados} />}/> 
              <Route path='exercise10' element={<Exercise10/>} />
              <Route path='exercise11' element={<Exercise11/>} />
              <Route path='exercise12' element={<Exercise12/>} />
              <Route path='adminligado' element={<AdminLigado />} /> 
              <Route path='admindesligado' element={<AdminDesligado />} />
              <Route path='exercise16' element={<FormPreenchido dados={dados} />} />
              <Route path='brasil' element={<Brasil />} />  
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}
