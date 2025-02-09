import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import HomeHeader from "../../components/homeheader/HomeHeader";
import './SignUp.css';
import RomaCouple from "../../assets/romacouple.jpg";

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
            <HomeHeader/>
            <main className="outer-page-container">
                <div className="inner-page-container pages">
                    <h3> Register</h3>
                    <p>On this page you can register. After this you will be redirected directly to the login page where
                        you can log in.
                    </p>
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
                            />
                        </label>
                        {error &&
                            <p className="error">This account already exists. Please try a different email address or
                                login..</p>}
                        <button
                            type="submit"
                            className="form-button"
                            disabled={loading}
                        >
                            Register
                        </button>
                    </form>
                    <p>Already have an account? You can <Link to="/signin">log in</Link> here.</p>
                </div>
                <section className="pica-container">
                    <img src={RomaCouple} alt="koppel"/>
                </section>
            </main>
        </>
    );
}

export default SignUp;