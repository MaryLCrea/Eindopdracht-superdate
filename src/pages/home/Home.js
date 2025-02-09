import React, {useState, useEffect} from 'react';
import './Home.css';
import picture from '../../assets/wood.jpg';
import HomeHeader from "../../components/homeheader/HomeHeader";
import LoginField from "../../components/loginfield/LoginField";

function Home() {


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