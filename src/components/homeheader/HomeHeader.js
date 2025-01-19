import React, {useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import './HomeHeader.css';
import {AuthContext} from "../../context/AuthContext";


function HomeHeader() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();

    return (
        <>
            <header className="outer-page-container">
                <div className="topmenu-outer-container1">
                    <h2><NavLink to="/">Superdate</NavLink></h2>
                    <nav className="topmenu-outer-container2">
                        <ul className="linkmenu-top">
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default HomeHeader;

