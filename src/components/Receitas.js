import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import bg2 from '../assets/bg2.png'
import textdecor2 from '../assets/text_decor2.png'
import './Receitas.css'

export default class Receitas extends Component {
    render() {
        return (
            <div>

                <Container>
                <Row>

                    <Col>
                    <div>
                        <div style={{ backgroundColor: 'green', height:'100px', width:'100%', 
                        color:'white', padding:'30px', marginTop:'100px' }} className="receita-inverno" >
                            <h1>Receitas de sopas low carb para o inverno</h1>
                        </div>

                        <div style={{ backgroundColor: 'green', height:'300px', 
                        color:'white', padding:'30px', marginTop:'100px' }}>
                            <p>s simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It 
                            was popularised in the. Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only </p>
                        </div>
                    </div>
                    </Col>
                </Row>
                </Container>

            <Container style={{ display:'flex', justifyContent:'center' }}>
                <div>
                        <div style={{ backgroundColor: '#af6438cb', height:'130px', width:'300px',
                            color:'white', padding:'30px', marginTop:'100px', 
                            justifyContent:'center', display:"block", alignItems:'center', textAlign:'center' }}>
                                <h2>Ver mais receitas</h2>
                                <img src={textdecor2} width="200px"/>
                            </div>
                    </div>
            </Container>
                  
            </div>
        )
    }
}
