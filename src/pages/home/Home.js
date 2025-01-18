import React from 'react';
import './Home.css';
import picture from '../../assets/wood.jpg';
import TopMenu from "../../components/topmenu/TopMenu";
import LoginField from "../../components/loginfield/LoginField";

function Home() {
    return (
        <>
            <TopMenu/>
            <LoginField/>
            <div className="outerpage-container">
                <img src={picture} className="home-picture" alt="home-picture"/>
                </div>
                </>
    );
}

export default Home;