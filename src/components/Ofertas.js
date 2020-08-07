import React, { Component } from 'react'
import './Ofertas.css'

export default class Ofertas extends Component {
    render() {
        return (
            <div>
                <div className="ofertas-bg">
                    <h1>Ofertas para uma vida mais saudável</h1>
                    <input type="search" placeholder="O que você está procurando?" style={{ width:'200px', 
                    borderRadius:'8px', boxShadow:'3px 3px 6px' }} /> 
                    <button>Compre online</button>                 

                </div>
            </div>
        )
    }
}
