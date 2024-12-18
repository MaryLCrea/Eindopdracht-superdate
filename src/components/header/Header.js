import {Link, NavLink, useHistory} from "react-router-dom";
import './Header.css';
import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";

function Header() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();
    return (
//         <> //met deze code stond mijn navigatie wel goed, moet er nog even naar kijken
//             <header className="outer-page-container">
//                 <div className= "topmenu-outer-container1">
//                     <h2><NavLink to="/" >Superdates</NavLink></h2>
//                     <nav className= "topmenu-outer-container2">
//                         <ul className="linkmenu2-top">
//                             <li><NavLink to="/myprofile">Mijn profiel</NavLink></li>
//                             <li><NavLink to="/profiles">Profielen</NavLink></li>
//                             <li><NavLink to="/">Uitloggen</NavLink></li>
//                         </ul>
//                     </nav>
//
//                 </div>
//             </header>
//         </>
//     );
// }
        <>
            <header className="outer-page-container">
                <div className="topmenu-outer-container1">
                    <h2><NavLink to="/">Superdate</NavLink></h2>
                    <nav className="topmenu-outer-container2">
                        <ul className="linkmenu-top">
                            <Link to="/"></Link>

                            {isAuth ?
                                <li type="link"
                                    onClick={logout}
                                >
                                    Uitloggen
                                </li>
                                :
                                <div>
                                    <li><NavLink to="/profile"
                                                 onClick={() => history.push('/profile')}>
                                        Mijn Profiel </NavLink>
                                    </li>

                                    <li><NavLink to="/allprofiles"
                                                 onClick={() => history.push('/allprofiles')}>
                                        Profielen </NavLink>
                                    </li>

                                    <li><NavLink to="/CategoriesPage"
                                                 onClick={() => history.push('/CategoriesPage')}>
                                        Recepten </NavLink>
                                    </li>


                                    <li><NavLink to="/"
                                                 onClick={() => history.push('/')}>
                                        Uitloggen </NavLink>
                                    </li>


                                </div>

                            }
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;

