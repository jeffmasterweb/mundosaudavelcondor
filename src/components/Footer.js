import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Logo from '../assets/logocondor.png'

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-container">

                        <div className="container-logo">
                            <img src={Logo} width="140px" />
                        </div>

                        <div className="footer-direitos">
                            <p>@Condor 2020. Todos os direitos reservados.</p>
                        </div>

                        <div className="footer-redessociais">
                            <ul>
                                <a href="https://www.facebook.com/RedeCondor/" ><li><FaFacebook color="white" size="30px"/></li></a>
                                <a href="https://www.instagram.com/redecondor/"><li><FaInstagram color="white" size="30px"/></li></a>
                                <a href="https://twitter.com/RedeCondor"><li><FaTwitter color="white" size="30px"/></li></a>
                                <a href="https://www.youtube.com/user/redecondor"><li><FaYoutube color="white" size="30px"/></li></a>
                            </ul>
                        </div>
            </div> 
        )
    }
}


