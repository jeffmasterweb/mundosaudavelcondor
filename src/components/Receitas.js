import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import bg2 from '../assets/bg2.png'
import './Receitas.css'


const styles = {
    containerReceitasBg: {
        backgroundImage: `url(${bg2})`,
        backgroundSize: 'cover',
        height:'350px'
    }
};

export default class Receitas extends Component {
    render() {
        return (
            <div style={styles.containerReceitasBg}>

                    <Container>
                    <Row>

                        <Col lg={6} style={{ padding:'0px'}}>
                            
                            <div>
                                    <div style={{ backgroundColor: 'green', height:'35%', width:'100%', position:'relative', 
                                        color:'white', padding:'30px', marginTop:'-50px' }} className="receita-inverno" >
                                        <h1 style={{ color:'white', fontFamily:'Geller Headline', fontSize:'1.5rem' }}>Receitas de sopas low carb para o inverno</h1>
                                    </div>
                            </div>


                            <div>
                                <div style={{ backgroundColor: 'green', height:'35%', width:'100%', position:'relative', 
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
                
            </div>
        )
    }
}
