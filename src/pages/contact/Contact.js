import React from 'react';
import './Contact.css';
import HomeHeader from "../../components/homeheader/HomeHeader";
import {Link} from "react-router-dom";
import CForm from "../../components/cform/CForm";

function Contact() {
    return (
        <>
            <HomeHeader/>
            <CForm/>
            <Link to="/" className="home-link">⬅ Back to Home</Link>
        </>
    );
}

export default Contact;