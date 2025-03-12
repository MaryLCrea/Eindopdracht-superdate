import React, {createContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import LoadingAnimation from "../components/loadanimation/LoadAnimation";

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const [error, setError] = useState(null);
    const history = useHistory();

    useEffect(() => {
        const controller = new AbortController();
        const token = localStorage.getItem('token');

        if (token) {
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token, controller.signal);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
        return () => {
            controller.abort();
        };

    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);
        const controller = new AbortController();
        fetchUserData(decoded.sub, JWT, controller.signal);
        history.push('/profile');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        history.push('/');
    }

    async function fetchUserData(id, token, signal) {
        try {
            const result = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                signal: signal,
            });

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            if (signal) {
                history.push('/profile');
            }

        } catch (e) {
            console.error('Error fetching user data:', e);

            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'pending' ? (
                <LoadingAnimation />
            ) : (
                <>
                    {error && <p className="error">{error}</p>}
                    {children}
                </>
            )}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;