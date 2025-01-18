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
                                     <span>

                                            <Link to={`/subprofile/${profiles.id}`}>
                                                <p className="profile-name">
                                                    {profiles.firstname} {profiles.lastname}
                                                </p>
                                            </Link>

                                        <img src={profiles.image} alt="profiles-img" className="profiles-img" />
                                        <p>Name: {profiles.firstname}</p>
                                        <p>Age: {profiles.age}</p>
                                        <p>Country: {profiles.country}</p>
                                        <p>Province: {profiles.province}</p>
                                        <p>About Me: {profiles.about_me}</p>
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