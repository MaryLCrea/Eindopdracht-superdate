import React from 'react';
import './Home.css';
import homepicture from '../../assets/wood.jpg';
import TopMenu from "../../components/topmenu/TopMenu";

function Home() {

    return (
        <>
            <TopMenu/>
            <div className="outerpage-container">
                <img src={homepicture} className="home-picture" alt="home-picture"/>
            </div>
        </>
    );
}

export default Home;