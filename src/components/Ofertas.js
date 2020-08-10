import React, { Component } from 'react'
import bg3 from '../assets/bg3.png'
import './Ofertas.css'


const styles = {
    containerReceitasBg: {
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        height:'1000px'
    }
}; 

export default class Ofertas extends Component {
    render() {
        return (
            <div>
                <div style={styles.containerReceitasBg}>
                    <h1 className="oferta-titulo" >Ofertas para uma vida mais saudável</h1>
                    <input type="search" placeholder="O que você está procurando?" style={{ width:'70%',
                    borderRadius:'8px', boxShadow:'3px 3px 6px', border:"none", padding: '5px 20px' }} /> 

                    <div>
                    <span></span><button className="oferta-button">Compre online</button> 
                    </div>

                    <div>
                    <span></span><button className="oferta-button">Ver tudo</button> 
                    </div>

                </div>
 
            </div>
        )
    }
}
