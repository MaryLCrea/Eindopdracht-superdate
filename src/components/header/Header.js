import {NavLink, useHistory} from "react-router-dom";
import './Header.css';
import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

function Header() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();
    return (
        <>
            <header className="outer-page-container">
                <div className="topmenu-outer-container1">
                    <h2><NavLink to="/">Superdate</NavLink></h2>
                    <nav className="topmenu-outer-container2">
                        <ul className="linkmenu-top">
                            <li>
                                <NavLink to="/" exact activeClassName="active">Home</NavLink>
                            </li>

                            {isAuth ? (
                                <li type="link" onClick={logout}>
                                    Uitloggen
                                </li>
                            ) : (
                                <div>
                                    <li>
                                        <NavLink to="/profile" activeClassName="active">
                                            Mijn Profiel
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/allprofiles" activeClassName="active">
                                            Profielen
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/CategoriesPage" activeClassName="active">
                                            Recepten
                                        </NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/" activeClassName="active">
                                            Uitloggen
                                        </NavLink>
                                    </li>
                                </div>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;

