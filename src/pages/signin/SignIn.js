import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import TopMenu from "../../components/topmenu/TopMenu";
import Malediven from "../../assets/malediven.jpg";

function SignIn() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, toggleError] = useState(false);
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log(result.data);
            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <TopMenu/>
            <main className="outer-page-container">
                <div className="form-container">

                    <h3>Inloggen</h3>
                    <article className="text"> Log hier in om ook andere profielen te kunnen bekijken.
                    </article>

                    <form className="text" onSubmit={handleSubmit}>
                        <label htmlFor="email-field">
                            Gebruikersnaam:
                            <input
                                type="username"
                                id="username-field"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label htmlFor="password-field">
                            Wachtwoord:
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        {error && <p className="error">Combinatie van gebruikersnaam en wachtwoord is onjuist</p>}
                        <button
                            type="submit"
                            className="form-button"
                        >
                            Inloggen
                        </button>
                    </form>

                    <p>
                        Heb je nog geen account? <Link to="/signup"> Registreer </Link> je dan eerst.
                    </p>

                </div>
                <section className="picture-container">

                    <img className="malediven" src={Malediven} alt="malediven"/>
                </section>
            </main>
        </>
    );
}


export default SignIn;