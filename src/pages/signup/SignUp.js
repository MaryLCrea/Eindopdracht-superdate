import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';
import RomaCouple from "../../assets/romacouple.jpg";
import NavBarHome from "../../components/navbarhome/NavBarHome";

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        const controller = new AbortController();
        const {signal} = controller;

        try {
            const result = await axios.post(
                'https://frontend-educational-backend.herokuapp.com/api/auth/signup',
                {
                    email: email,
                    password: password,
                    username: username,
                },
                {signal}
            );
            history.push('/signin');
        } catch (e) {
            if (e.name === 'AbortError') {
            } else {
                console.error(e);
                setError(e.response?.data?.message || "Something went wrong, please try again.");
            }
        }

        return () => {
            controller.abort();
        };
    }

    return (
        <>
            <NavBarHome/>
            <section className="outer-page-container">
                <section className="inner-page-container pages">
                    <header>
                        <h3> Register</h3>
                        <p>On this page you can register. After this you will be redirected directly to the login page
                            where
                            you can log in.
                        </p>
                    </header>
                    <form className="text" onSubmit={handleSubmit}>
                        <label htmlFor="email-field">
                            E-Mail:
                            <input
                                type="email"
                                id="email-field"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your e-mail address"
                                autoComplete="email"
                            />
                        </label>
                        <label htmlFor="username-field">
                            Username:
                            <input
                                type="text"
                                id="username-field"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username"
                                autoComplete="username"
                            />
                        </label>
                        <label htmlFor="password-field">
                            Password:
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Choose a password"
                                autoComplete="new-password"
                            />
                        </label>
                        {error && <p className="error">{error}</p>}
                        <button
                            type="submit"
                            className="form-button"
                        >
                            Register
                        </button>
                    </form>
                    <p>Already have an account? You can <Link to="/signin">log in</Link> here.</p>
                </section>
                <section className="pica-container">
                    <img src={RomaCouple} alt="koppel"/>
                </section>
            </section>
        </>
    );
}

export default SignUp;