import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import './LoginField.css';

function Login() {
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
            <main>
                <div className="login-box">
                    <h4>Inloggen</h4>
                    <form className="text" onSubmit={handleSubmit}>
                        <label htmlFor="email-field">
                            Username:
                            <input
                                type="username"
                                id="username-field"
                                name="username"
                                value={username}
                                placeholder="Enter your username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label htmlFor="password-field">
                            Password:
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                placeholder="Enter your password"
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

                    <p className="register-tekst">
                        Don't have an account yet? <Link to="/signup"> Register </Link>
                    </p>

                </div>
                <section>

                </section>
            </main>
        </>
    );
}


export default Login;