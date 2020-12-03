import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './Footer.scss'
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";


class Footer extends Component {
    render() {
        return (
            <div className={'footer'}>
                <div className={'footer-wrapper'}>
                    <div className={'footer-text'}>
                       (C) Copyright by Anton Ovcharenko 2020
                    </div>
                    <div className={'footer-text'}>
                        <a href={'https://github.com/AntonOvcharenko-geek'}>
                            <FontAwesomeIcon icon={faGithub} className={'font-awesome-icons'}/>
                        </a>
                        <a href={'https://www.instagram.com/anetka.koval/'}>
                        <FontAwesomeIcon icon={faInstagram} className={'font-awesome-icons'} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;