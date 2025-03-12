import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import Malediven from '../../assets/malediven.jpg';
import NavBarHome from "../../components/navbarhome/NavBarHome";

function SignIn() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const {login} = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');

        const controller = new AbortController();
        const { signal } = controller;

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            }, {signal: controller.signal});

            login(result.data.accessToken);

        } catch (e) {
            if (e.name === 'AbortError') {
            } else {
                console.error(e);
                setError(e.response?.data?.message || "Something went wrong, please try again.");
            }
        }
    }

    return (<>
        <NavBarHome/>
        <section className="outer-page-container">
            <section className="inner-page-container pages">
                <header>
                <h3>Inloggen</h3>
                <article className="text"> Log in here to view other profiles.
                </article>
                </header>
                <form className="text" onSubmit={handleSubmit}>
                    <label htmlFor="username-field">
                        Username:
                        <input
                            type="text"
                            id="username-field"
                            name="username"
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
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                    </label>
                   {error && <p className="error">{error}</p>}
                    <button type="submit" className="form-button">
                                            </button>
                </form>
                <p>

                    Don't have an account yet? <Link to="/signup"> Register </Link> first.
                </p>
            </section>
            <section className="pica-container">
                <img className="malediven" src={Malediven} alt="malediven"/>
            </section>
        </section>
    </>);
}

export default SignIn;