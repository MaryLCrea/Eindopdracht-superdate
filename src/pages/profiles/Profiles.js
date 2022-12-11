import React, { useEffect, useState } from 'react';
import './Profiles.css';
import { Link } from 'react-router-dom';
import Header from "../../components/header/Header";

function Profiles() {
    const [data, setData] = useState([]);
    const getData=()=>{
        fetch('data.json'
            ,{
                headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function(response){
                console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
                setData(myJson)
            });
    }
    useEffect(()=>{
        getData()
    },[])

    return (
        <>
           <Header/>
                 <main>
                <section className="outer-page-container">
                    {/*<Link to="/myprofile"><Button/></Link>*/}
                      <div className="inner-profiles-container">

                          {data.map((profiles) => {
                                return (
                                    <article className="profile-card" key={profiles.id}>
                                      <a href={profiles.firstname}> </a>
                      <span>
                      <p><Link to={`/subprofile/${profiles.firstname} ${profiles.lastname}`}>{profiles.firstname} </Link></p>
                          <img src={profiles.image} alt="profiles-img" className="profiles-img"/>
                                 <p> Naam: {profiles.firstname} </p>
                             <p> Geaardheid: {profiles.orientation} </p>
                           <p> Burgerlijke staat: {profiles.marital_status} </p>
                         <p> Leeftijd: {profiles.age} </p>
                         <p> Gewenst contact: {profiles.looking_for} </p>
                         <p> Mijn postuur: {profiles.posture} </p>
                        <p> Over mij: {profiles.about_me} </p>
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