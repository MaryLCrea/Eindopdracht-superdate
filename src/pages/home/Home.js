import React, {useState, useEffect} from 'react';
import './Home.css';
import picture from '../../assets/wood.jpg';
import HomeHeader from "../../components/homeheader/HomeHeader";
import LoginField from "../../components/loginfield/LoginField";

function Home() {
    // const [loginField, setLoginField] = useState(null);
    // const [signUpField, setSignUpField] = useState(null);
    //
    // useEffect = () => {
    //     function FetchFields() {
    //         console.log ("staat het in de console?")
    // }

    // useEffect(() => {}, [])}  Als ik nog tijd heb hier een dynamisch veld maken van het inlog en registratie blok

    return (
        <>
            <HomeHeader/>
            <LoginField/>
            <div className="outerpage-container">
                <img src={picture} className="home-picture" alt="home-picture"/>
                </div>
                </>
    );
}

export default Home;