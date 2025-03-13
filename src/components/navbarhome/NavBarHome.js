import React, {useState, useContext} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import './NavBarHome.css';
import {AuthContext} from "../../context/AuthContext";

function NavBarHome() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <section className="outer-page-container">
                <section className="topmenu-outer-containers1">
                    <header>
                        <h2><NavLink to="/">Superdate</NavLink></h2>
                    </header>
                    <button type="submit" className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>

                    <nav className={`topmenu-outer-containers2 ${menuOpen ? 'open' : ''}`}>
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
                </section>
            </section>
        </>
    );
}

export default NavBarHome;


