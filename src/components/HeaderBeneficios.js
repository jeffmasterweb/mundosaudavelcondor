import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import bg from '../assets/bg.png'
import Logo from '../assets/logo.png'
import textdecor from '../assets/text_decor.png'
import textdecor2 from '../assets/text_decor2.png'
import leticia from '../assets/leticia.png'
import bgl from '../assets/bg_leticia.png'
import img1 from '../assets/img1.png'
import obj1 from '../assets/obj1.png'
import obj5 from '../assets/obj5.png'

import { Container } from 'react-bootstrap'

import './HeaderBeneficios.css'


const styles = {
    containerHeaderBg: {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover'
    },

    containerHeaderBgLeticia: {
        backgroundImage: `url(${bgl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundPositionX: '150%',
        backgroundPositionY: '600px',
        backgroundSize:'70%',
        @media(max-width: 991px): {
            backgroundSize:'200%'
        }
    },

    containerHeaderCereais: {
        backgroundImage: `url(${obj1})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '115%',
        backgroundPositionY: '200px',
        backgroundSize:'25%'
    },

    containerHeaderMorango5: {
        backgroundImage: `url(${obj5})`,
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '-45px',
        backgroundPositionY: '840px',
        backgroundSize:'110px'        
    }
};

export default class HeaderBeneficios extends Component {
    render() {
        return (
            <div style={styles.containerHeaderBg}>
                
                <div style={styles.containerHeaderBgLeticia}>

                        <div style={styles.containerHeaderCereais}>

                            <div style={styles.containerHeaderMorango5}>


                                    <Container fluid="lg">
                                    <Row>

                                        <Col lg>
                                            <img src={Logo} className="LogoHeader" />
                                        </Col>

                                    </Row>

                                    <Row id="troca">

                                        <Col lg={6} style={{ padding:'0px'}}>
                                        <h1 className="produtosqualidade">Produtos de Qualidade de uma vida mais saudável.</h1>
                                        <img src={textdecor} style={{ width:"50%" }} />
                                        <h2 className="cliquepontos">Clique nos pontos para ver os benefícios de uma alimentação saudável</h2>


                                            <img src={leticia} className="leticia1" />
                                            

                                        <div>

                                            <div className="foto-circulo" >
                                                    <img src={img1}/>
                                            </div>

                                            <div className="box-header" >

                                                <h3 className="aumentaenergia">Aumenta a energia</h3>
                                                <img src={textdecor2} style={{ width:'50%', padding:'15px 15px 40px 15px', color:'white' }} />
                                                <p>is simply dummy text of the printing and typesetting 
                                                industry. Lorem Ipsum has been the industry's standard 
                                                dummy text ever since the 1500s, when an unknown printer 
                                                took a galley of type and scrambled it to make a type specimen 
                                                book. It has survived not only five centuries, but also the leap 
                                                into electronic typesetting, remaining essentially unchanged. It 
                                                was popularised in the.</p>
                                            </div>

                                        </div>

                                        </Col>
                                        
                                        <Col lg={6} style={{ padding:'0px'}}>
                                        <img src={leticia} className="leticia"/>
                                        </Col>

                                    </Row>
                                    </Container>


                            </div>

                        </div>

                </div>
                
            </div>
        )
    }
}
