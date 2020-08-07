import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import obj2 from '../assets/obj2.png'
import Logo from '../assets/logo.png'
import obj1 from '../assets/obj1.png'
import textdecor from '../assets/text_decor.png'
import textdecor2 from '../assets/text_decor2.png'
import leticia from '../assets/leticia.png'
import img1 from '../assets/img1.png'
import { Container } from 'react-bootstrap'



export default class HeaderBeneficios extends Component {
    render() {
        return (
            <div>
                
                <Container>
                <Row className="Header-row">

                    <Col lg>
                <img src={Logo} style={{ width:'80%', marginTop:'50px' }} />
                    </Col>

                </Row>

                <Row>

                    <Col>
                    <h1 style={{ color:'#af6438cb', marginTop:'50px' }}>Produtos de Qualidade de uma visa mais saudável.</h1>
                    <img src={textdecor} style={{ width:"50%" }} />
                    <h2 style={{ color:'green' }}>Clique nos pontos para ver os benefícios de uma alimentação saudável</h2>

                    <di style={{ position:'relative' }} >
                        <img src={img1} style={{ position:'absolute', zIndex:'10', position:'fluter', width:'200px' }} />

                        <div style={{ backgroundColor: '#af6438cb', height:'320px', width:'100%', 
                        color:'white', padding:'30px' }} >
                        <h3>Aumenta a energia</h3>
                        <img src={textdecor2}/>
                        <p>is simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, when an unknown printer 
                            took a galley of type and scrambled it to make a type specimen 
                            book. It has survived not only five centuries, but also the leap 
                            into electronic typesetting, remaining essentially unchanged. It 
                            was popularised in the.</p>
                        </div>
                    </di>


                    </Col>
                    
                    <Col>
                    <img src={leticia} style={{ width:'80%', marginTop:'50px' }} />
  
                    </Col>

                </Row>
                </Container>
                
            </div>
        )
    }
}
