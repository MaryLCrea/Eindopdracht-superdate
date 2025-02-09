// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import {BrowserRouter as Router} from "react-router-dom";
// import AuthContextProvider from "./context/AuthContext";
//
//
//
// ReactDOM.render(
//     <Router>
//         <AuthContextProvider>
//             <App />
//         </AuthContextProvider>
//     </Router>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <AuthContextProvider>
            <App/>
        </AuthContextProvider>
    </Router>
);

