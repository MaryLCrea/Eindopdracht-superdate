import React from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import waarborg from '../../assets/thuiswinkel.png';
import keurmerk from '../../assets/keurmerk-vd.png';
function Footer() {
    return (
        <>
            <div className="footer-boven">
                <ul className="footer-linkmenu">
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/algvw">Terms and Conditions</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="footer-onder">
                <img src={keurmerk} alt="keurmerk" className="keurmerk-plaatjes"/>
                <img src={waarborg} alt="waarborg" className="keurmerk-plaatjes"/>
            </div>
            <div className="footer-copyright">Superdate © 2025</div>
        </>
    );
}

export default Footer;

