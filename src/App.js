import React from 'react';
import './App.css';

import Menu from './components/Menu';
import bg from './assets/bg.png'
import HeaderBeneficios from './components/HeaderBeneficios';
import Receitas from './components/Receitas';
import Ofertas from './components/Ofertas';

function App() {
  return (
    <div className="App">
      <img src={bg} className="App-fundo"/>
      <Menu/>
      <HeaderBeneficios/>
      <Receitas/>
      <Ofertas/>
      
      
    </div>
  );
}

export default App;
