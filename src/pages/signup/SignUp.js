import React, {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import TopMenu from "../../components/topmenu/TopMenu";

function SignUp() {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const result = await axios.post(
                'https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    email: email,
                    password: password,
                    username: username,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'superdating:7Lngh4xpUy887KlrrYmJ',
                    },
                }
            );

            console.log(result);

            history.push('/signin');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }
    return (
        <>
            <TopMenu/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">
                    <p>Op deze pagina kun je je registreren. Hierna word je direct doorverwezen naar de inlogpagina
                        waar je je kunt inloggen.
                    </p>
                    <h3>Registreren</h3>
                    <form className="text" onSubmit={handleSubmit}>
                        <label htmlFor="email-field">
                            Emailadres:
                            <input
                                type="email"
                                id="email-field"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label htmlFor="username-field">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id="username-field"
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
                        {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                        <button
                            type="submit"
                            className="form-button"
                            disabled={loading}
                        >
                            Registreren
                        </button>
                    </form>
                    <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
                </div>
            </main>
        </>
    );
}

export default SignUp;

// https://frontend-educational-backend.herokuapp.com/api/auth/signup