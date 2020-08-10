import React from 'react';
import './App.css';

import Menu from './components/Menu';
import HeaderBeneficios from './components/HeaderBeneficios';
import Receitas from './components/Receitas';
import Ofertas from './components/Ofertas';
import Receitas2 from './components/Receitas2';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <HeaderBeneficios/>
      <Receitas/>
      <Receitas2/>
      <Ofertas/>
      <Blog/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
