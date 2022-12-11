import React, {useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/header/Header";
import './MyProfile.css';


function MyProfile() {
    const [profileData, setProfileData] = useState({});
    const [profile, setProfile] = useState([]);

    useEffect(() => {
            async function fetchProfileData() {
             const token = localStorage.getItem('token');

             try {
                 const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                     headers: {
                         "Content-Type": "application/json",
                         Authorization: `Bearer ${token}`,
                    },});
                setProfileData(result.data);
            } catch (e) {
                 console.error(e);
             }
         }
         fetchProfileData();
     }, [])


    useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=1&');
            console.log(response);
            setProfile(response.data.data);
        } catch (e) {
            console.error(e);
        }
    }
    fetchData();
}, [])

    return (
        <>
            <Header/>
                 <main>
                    <section className="outer-page-container">

                         <div className="inner-profiles-container">

                            {profile.map((profile) => {
                                return (
                                    <article className="profile-card" key={profile.id}>
                                        <p> Welkom {profile.firstname}  </p>

                                        <span>

                          <img src={profile.image} alt="profile-img" className="profile-img"/>
                                 <p> Naam: {profile.firstname} {profile.lastname} </p>
                             <p> Gender: {profile.gender} </p>
                         <p> Geboortedatum: {profile.birthday} </p>

                         <p> Mijn e-mail adres: {profile.email} </p>
                         <p> Mijn telefoonnummer: {profile.phone} </p>
                        <p> Mijn website: {profile.website} </p>
                            </span>
                             </article>

                                )
                            })}
                        </div>
                    </section>
                </main>
       </>
    );
}

export default MyProfile;