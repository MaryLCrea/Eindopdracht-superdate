import React, { useEffect, useState } from 'react';
import './Profiles.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header";

function Profiles() {
    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=48&');
                console.log(response);
                setProfiles(response.data.data);
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
                    {/*<Link to="/myprofile"><Button/></Link>*/}
                      <div className="inner-profiles-container">

                          {profiles.map((profiles) => {
                                return (
                                    <article className="profile-card" key={profiles.id}>
                                      <a href={profiles.firstname}> </a>

                      <span>
                      <p><Link to={`/subprofile/${profiles.firstname} ${profiles.lastname}`}>{profiles.firstname} </Link></p>
                          <img src={profiles.image} alt="profiles-img" className="profiles-img"/>
                                 <p> Naam: {profiles.firstname} {profiles.lastname} </p>
                             <p> Gender: {profiles.gender} </p>
                         <p> Geboortedatum: {profiles.birthday} </p>

                         <p> Mijn e-mail adres: {profiles.email} </p>
                         <p> Mijn telefoonnummer: {profiles.phone} </p>
                        <p> Mijn website: {profiles.website} </p>
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

export default Profiles;