import React from "react";
import HomeHeader from "../../components/homeheader/HomeHeader";
import {Link} from "react-router-dom";
import './NotFound.css';

function NotFound() {

    return (
        <>
            <HomeHeader/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">

                    <h2>Oops... This page doesn't exist</h2>
                    <p className="link-text">
                    <Link to="/">Take me back to the home page</Link>
                    </p>
                </div>
            </main>
        </>
    );
}

export default NotFound;
