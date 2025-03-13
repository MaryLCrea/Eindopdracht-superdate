import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import waarborg from '../../assets/thuiswinkel.png';

function Footer() {
    return (
        <>
            <section className="footer-boven">
                <header>
                    <ul className="footer-linkmenu">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/algvw">Terms and Conditions</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </header>
            </section>
            <section className="footer-onder">
                <img src={waarborg} alt="waarborg" className="keurmerk-plaatjes"/>
            </section>
            <section className="footer-copyright">Superdate © 2025</section>
        </>
    );
}

export default Footer;