import React from 'react';
import './App.css';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import Home from "./pages/home/Home";
import {Route, Switch} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import SubProfile from "./pages/subprofile/SubProfile";
import AlgVw from "./pages/algvw/AlgVw";
import Profiles from "./pages/profiles/Profiles";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import MyProfile from "./pages/myprofile/MyProfile";


function App() {

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/SignUp">
                    <SignUp/>
                </Route>
                <Route exact path="/SignIn">
                    <SignIn/>
                </Route>
                <Route exact path="/Profiles">
                    <Profiles/>
                </Route>
                <Route exact path="/MyProfile">
                    <MyProfile/>
                </Route>
                <Route exact path="/About">
                    <About/>
                </Route>
                <Route exact path="/AlgVw">
                    <AlgVw/>
                </Route>
                <Route exact path="/Contact">
                    <Contact/>
                </Route>
                <Route path="/SubProfile/:id">
                    <SubProfile/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;


