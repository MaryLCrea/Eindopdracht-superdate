import React from "react";
import {Link} from "react-router-dom";
import './NotFound.css';
import picture from "../../assets/dog.png";
import NavBarHome from "../../components/navbarhome/NavBarHome";

function NotFound() {

    return (
        <>
            <NavBarHome/>
            <section className="outer-page-container">
                <section className="inner-page-container pages">
                    <header>
                        <h2>Oops... The page you are trying to find doesn't exist</h2>
                    </header>
                    <section className="container">
                        <img src={picture} className="dog" alt="dog"/>
                    </section>
                    <p className="link-text">
                        <Link to="/" className="home-link">⬅ Back to Home</Link>
                    </p>
                </section>
            </section>
        </>
    );
}

export default NotFound;
