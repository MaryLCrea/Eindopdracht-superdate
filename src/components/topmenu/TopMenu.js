import React, {useContext} from 'react';
import {Link, NavLink, useHistory} from "react-router-dom";
import './TopMenu.css';
import {AuthContext} from "../../context/AuthContext";


function TopMenu() {
    const {isAuth, logout} = useContext(AuthContext);
    const history = useHistory();
    return (
//         <> //met deze code stond mijn navigatie wel goed, moet er nog even naar kijken
//             <header className="outer-page-container">
//                 <div className= "topmenu-outer-container1">
//                     <h2><NavLink to="/" >Superdates</NavLink></h2>
//                 <nav className= "topmenu-outer-container2">
//                     <ul className="linkmenu-top">
//                         <li><NavLink to="/signup">Registreren</NavLink></li>
//                         <li><NavLink to="/MyProfile">Inloggen</NavLink></li>
//                     </ul>
//           </nav>
//
//                 </div>
//             </header>
//      </>
//     );
// }
        <>
            <header className="outer-page-container">
                <div className="topmenu-outer-container1">
                    <h2><NavLink to="/">Superdate</NavLink></h2>
                    <nav className="topmenu-outer-container2">
                        <ul className="linkmenu-top">

                            {isAuth ?
                                <li type="link"
                                    onClick={logout}
                                >
                                    Uitloggen
                                </li>
                                :
                                <div>
                                    <li><NavLink to="/signin"
                                                 onClick={() => history.push('/signin')}>
                                        Inloggen </NavLink>
                                    </li>

                                    <li><NavLink to="/signup"
                                                 onClick={() => history.push('/signup')}>
                                        Registreren </NavLink>
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

export default TopMenu;

