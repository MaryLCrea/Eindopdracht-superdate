import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './SubProfile.css';
import Header from "../../components/header/Header";
import Button from "../../components/button/Button";

function SubProfile() {
    const [subProfile, setSubProfile] = useState({});
    const { id } = useParams();
    // const { email } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.goprogram.ai/inspiration`);
                console.log(response);
                setSubProfile(response.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
            <>
                <Header/>
            <main>
                <section className="outer-page-container">
                    <div className="inner-profiles-container">
                        {Object.keys(subProfile).length > 0 && (
                            <div className="profile-card">
                                <h3>Dit is het profiel van: </h3>
                                <h1>{id}</h1>
                                <p>Laat een bericht achter voor {id}: </p>
                                <textarea rows="10" cols="50" />
                                <button>Verzenden</button>
                                <Link to="/profiles"><Button/></Link>
                                <span className="sub4">
                </span>
                </div>
                        )}
                    </div>

                </section>

            </main>

        </>
    );
}
export default SubProfile;