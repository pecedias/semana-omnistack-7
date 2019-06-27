import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes';

// Componente: é um arq. Js que retorna um conteúdo JSX (Pode ser Função ou Classe)
function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes />
    </BrowserRouter>
  );
}

export default App;