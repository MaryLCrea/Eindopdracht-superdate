import React from "react";
import HomeHeader from "../../components/homeheader/HomeHeader";
import {Link} from "react-router-dom";
import './NotFound.css';
import picture from "../../assets/dog.png";

function NotFound() {

    return (
        <>
            <HomeHeader/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">

                    <h2>Oops... The page you are trying to find doesn't exist</h2>

                    <div className="container">
                        <img src={picture} className="dog" alt="dog"/>
                    </div>
                    <p className="link-text">
                        <Link to="/" className="home-link">⬅ Back to Home</Link>
                    </p>
                </div>
            </main>
        </>
    );
}

export default NotFound;
