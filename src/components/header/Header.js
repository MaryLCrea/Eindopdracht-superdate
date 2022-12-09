import {Link, NavLink, useHistory} from "react-router-dom";
import './Header.css';
import React, { useContext } from 'react';
import {AuthContext} from "../../context/AuthContext";

function Header() {
    const { isAuth, logout } = useContext(AuthContext);
    const history = useHistory();
    return (
//         <>
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
                <div className= "topmenu-outer-container1">
                    <h2><NavLink to="/" >Superdate</NavLink></h2>
                    <nav className= "topmenu-outer-container2">
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
                                    <li><NavLink to="/myprofile"
                                                 onClick={() => history.push('/myprofile')}>
                                        Mijn Profiel </NavLink>
                                    </li>

                                    <li><NavLink to="/profiles"
                                                 onClick={() => history.push('/profiles')}>
                                        Profielen </NavLink>
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

