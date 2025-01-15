import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SubProfile.css';
import Header from "../../components/header/Header";

function SubProfile() {
    const { id } = useParams();
    const [subProfile, setSubProfile] = useState({});

    useEffect(() => {
        const getData = () => {
            fetch('data.json', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            })
                .then((response) => response.json())
                .then((myJson) => {
                    const profile = myJson.find((p) => p.id === id);
                    setSubProfile(profile || {});
                });
        };

        getData();
    }, [id]);

    return (
        <>
            <Header />
            <main>
                <section className="outer-page-container">
                    <div className="inner-profiles-container">
                        {subProfile && (
                            <div className="profile-card">
                                <h1>{subProfile.firstname} {subProfile.lastname}</h1>
                                <p>Leeftijd: {subProfile.age}</p>
                                <p>Over mij: {subProfile.about_me}</p>
                                <p>Geaardheid: {subProfile.orientation}</p>
                                <p>Mijn postuur: {subProfile.posture}</p>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </>
    );
}

export default SubProfile;