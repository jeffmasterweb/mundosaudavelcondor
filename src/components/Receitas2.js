import React, { Component } from 'react'
import bg from '../assets/bg.png'
import textdecor2 from '../assets/text_decor2.png'
import { Container, Row, Col } from 'react-bootstrap'

import './Receitas2.css'

const styles = {
    containerReceitasBgPapel: {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        height:'530px'
    }
};

export default class Receitas2 extends Component {
    render() {
        return (
            <div style={styles.containerReceitasBgPapel}>
                
                <Container style={{ display:'flex', justifyContent:'center' }}>
                        <div>
                            <div className="vermaisreceitas">
                                    <h2>Ver mais receitas</h2>
                                    <img src={textdecor2} width="80%"/>
                            </div>
                        </div>
                </Container>
                
            </div>
        )
    }
}
