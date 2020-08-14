import React from 'react'
import './App.css'

import Menu from './components/Menu'
import HeaderBeneficios from './components/HeaderBeneficios'
import Receitas from './components/Receitas'
import Ofertas from './components/Ofertas'
import Receitas2 from './components/Receitas2'
import Blog from './components/Blog'
import Footer from './components/Footer'

import obj2 from './assets/obj2.png'
import obj4 from './assets/obj4.png'
import obj3 from './assets/obj3.png'

function App() {
  return (
    <div className="App">

            <img src={obj2} alt="" className="morango2" />
            <img src={obj4} alt="" className="limao" />
            <img src={obj3} alt="" className="laranja" />  

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
