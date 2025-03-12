import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './NavBarHome.css';
import { AuthContext } from "../../context/AuthContext";

function NavBarHome() {
    const { isAuth, logout } = useContext(AuthContext);
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="outer-page-container">
                <div className="topmenu-outer-container1">
                    <h2><NavLink to="/">Superdate</NavLink></h2>

                    <button  type="submit" className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>

                    <nav className={`topmenu-outer-container2 ${menuOpen ? 'open' : ''}`}>
                        <ul className="linkmenu2-top">
                            <li>
                                <NavLink to="/" activeClassName="active">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Contact" activeClassName="active">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default NavBarHome;


