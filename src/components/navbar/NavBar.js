import {NavLink, useHistory} from "react-router-dom";
import "./NavBar.css";
import React, {useContext, useState} from "react";
import {AuthContext} from "../../context/AuthContext";

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <section className="outer-page-container">
                <section className="topmenu-outer-container1">
                    <h2><NavLink to="/">Superdate</NavLink></h2>

                    <button
                        className="hamburger-menu"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        ☰
                    </button>

                    <nav className={`topmenu-outer-container2 ${menuOpen ? "open" : ""}`}>
                        <ul className="linkmenu2-top">
                            {isAuth ? (
                                <li type="link" onClick={logout}>
                                    Log Out
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <NavLink to="/" activeClassName="active">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/profile" activeClassName="active">
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/allprofiles" activeClassName="active">
                                            Profiles
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/CategoriesPage" activeClassName="active">
                                            Recipes
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/" activeClassName="active">
                                            Log Out
                                        </NavLink>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </section>
            </section>
        </>
    );
}

export default NavBar;