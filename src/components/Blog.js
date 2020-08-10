import React, { Component } from 'react'
import bg from '../assets/bg.png'
import bgl from '../assets/bg_leticia.png'
import { Container } from 'react-bootstrap'

import './Blog.css'

const styles = {
    containerBlogBgPapel: {
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        height:'700px'
    },
    containerBlogBgLeticia: {
        backgroundImage: `url(${bgl})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundPositionX: '700px',
        backgroundPositionY: '600px',
        backgroundSize:'400px'
    }
};

export default class Blog extends Component {
    render() {
        return (
            
            <div style={styles.containerBlogBgPapel}>

                <div style={styles.containerBlogBgLeticia}>

                <h1 className="blog-titulo" >Blog</h1>

                    <div>
                    <span></span><button className="oferta-button">Ver tudo</button> 
                    </div>

                </div>

            </div>
            
        )
    }
}
