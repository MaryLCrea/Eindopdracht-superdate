import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import TopMenu from "../../components/topmenu/TopMenu";

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
                <div className="inner-page-container pages">
                    <h3>Inloggen</h3>
                    <section className="text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum
                        debitis dolor dolore fuga id molestias qui quo unde?
                    </section>

                    <section className="text">

                        <form onSubmit={handleSubmit}>
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
                    </section>
                    <p className="text">
                        Heb je nog geen account? <Link to="/signup"> Registreer </Link> je dan eerst.
                    </p>
                </div>
            </main>
        </>
    );
}


export default SignIn;