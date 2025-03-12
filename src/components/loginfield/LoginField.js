import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import './LoginField.css';

function Login() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, toggleError] = useState(null);
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(null);

        const controller = new AbortController();
        const { signal } = controller;

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username, password: password,
            }, {signal}
            );
            login(result.data.accessToken);

        } catch (e) {
            if (e.response && e.response.data) {
                toggleError(e.response.data.message || "Unknown error occurred");
            } else {
                toggleError("Network error. Please try again later.");
            }
        }
        return () => {
            controller.abort();
        };
    }

    return (<>
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
                        {error && <p className="error">Username and password combination is incorrect</p>}
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
            </main>
        </>)
        ;
    }

export default Login;