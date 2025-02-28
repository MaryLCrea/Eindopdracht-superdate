import React, {useState, useEffect} from 'react';
import './Home.css';
import picture from '../../assets/wood.jpg';
import LoginField from "../../components/loginfield/LoginField";
import NavBarHome from "../../components/navbarhome/NavBarHome";

function Home() {


    return (
        <>
            <NavBarHome/>
            <LoginField/>
            <div className="outerpage-container">
                <img src={picture} className="home-picture" alt="home-picture"/>
            </div>
        </>
    );
}

export default Home;