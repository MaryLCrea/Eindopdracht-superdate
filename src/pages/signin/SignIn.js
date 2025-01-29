import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import HomeHeader from "../../components/homeheader/HomeHeader";
import Malediven from '../../assets/malediven.jpg';

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

    return (<>
        <HomeHeader/>
        <main className="outer-page-container">
            <div className="inner-page-container pages">
                <h3>Inloggen</h3>
                <article className="text"> Log in here to view other profiles.
                </article>
                <form className="text" onSubmit={handleSubmit}>
                    <label htmlFor="email-field">
                        Username:
                        <input
                            type="username"
                            id="username-field"
                            name="username"
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
                            placeholder="Enter your password"
                        />
                    </label>
                    {error && <p className="error">Username and password combination is incorrect</p>}
                    <button
                        type="submit"
                        className="form-button"
                    >
                        Log in
                    </button>
                </form>
                <p>

                    Don't have an account yet? <Link to="/signup"> Register </Link> first.
                </p>
            </div>
            <section className="pica-container">
                <img className="malediven" src={Malediven} alt="malediven"/>
            </section>
        </main>
    </>);
}

export default SignIn;

// https://frontend-educational-backend.herokuapp.com/api/auth/signin

// https://api.datavortex.nl/superdate/users/authenticate