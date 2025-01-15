import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from "../../components/header/Header";

function Profile() {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
            .then((response) => {
                console.log(response);
                return response.json();
            })
            .then((myJson) => {
                console.log(myJson);
                setData(myJson);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />
            <main>
                <section className="outer-page-container">
                    <div className="inner-profiles-container">
                        {data.map((profiles) => {
                            return (
                                <article className="profile-card" key={profiles.id}>
                                    <h6>{profiles.firstname}</h6>
                                    <span>
                                        <p>
                                            <Link to={`/subprofile/${profiles.id}`}>
                                                <h2 className="profile-name">
                                                    {profiles.firstname} {profiles.lastname}
                                                </h2>
                                            </Link>
                                        </p>
                                        <img src={profiles.image} alt="profiles-img" className="profiles-img" />
                                        <p>Naam: {profiles.firstname}</p>
                                        <p>Leeftijd: {profiles.age}</p>
                                        <p>Over mij: {profiles.about_me}</p>
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    );
}

export default Profile;