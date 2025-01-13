import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from "../../components/header/Header";
import FilterProfiles from "../../components/filterprofiles/FilterProfiles";
import './AllProfiles.css';

function AllProfiles() {
    const [profile, setProfile] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedAgeCategory, setSelectedAgeCategory] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=30&');
                const profilesWithAge = response.data.data.map(profile => ({
                    ...profile,
                    age: new Date().getFullYear() - new Date(profile.birthday).getFullYear(),
                }));
                setProfile(profilesWithAge);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Header />
            <main>
                <section className="outer-page-container">
                    <div className="inner-profiles-container">
                        <div>
                            <label>
                                Filter op gender:
                                <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
                                    <option value="">Alle</option>
                                    <option value="male">Man</option>
                                    <option value="female">Vrouw</option>
                                </select>
                            </label>
                            <label>
                                Filter op leeftijdscategorie:
                                <select value={selectedAgeCategory} onChange={(e) => setSelectedAgeCategory(e.target.value)}>
                                    <option value="">Alle</option>
                                    <option value="young">0-18</option>
                                    <option value="adult">19-35</option>
                                    <option value="senior">36-65</option>
                                </select>
                            </label>
                        </div>
                        <FilterProfiles
                            data={profile}
                            gender={selectedGender}
                            ageCategory={selectedAgeCategory}
                        />
                    </div>
                </section>
            </main>
        </>
    );
}

export default AllProfiles;

// export default AllProfiles;
//
// import React, {useEffect, useState} from 'react';
// import axios from 'axios';
// import Header from "../../components/header/Header";
// import './AllProfiles.css';
//
// function AllProfiles() {
//     const [profileData, setProfileData] = useState({});
//     const [profile, setProfile] = useState([]);
//
//     useEffect(() => {
//         async function fetchProfileData() {
//             const token = localStorage.getItem('token');
//
//             try {
//                 const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
//                     headers: {
//                         "Content-Type": "application/json",
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setProfileData(result.data);
//             } catch (e) {
//                 console.error(e);
//             }
//         }
//         fetchProfileData();
//     }, [])
//
//
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=30&');
//                 console.log(response);
//                 setProfile(response.data.data);
//             } catch (e) {
//                 console.error(e);
//             }
//         }
//         fetchData();
//     }, [])
//
//     return (
//         <>
//             <Header/>
//             <main>
//                 <section className="outer-page-container">
//
//                     <div className="inner-profiles-container">
//
//                         {profile.map((profile) => {
//                             return (
//                                 <article className="profile-card" key={profile.id}>
//                                     <h6> {profile.firstname}  </h6>
//
//                                     <span>
//
//                           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoV7tXoX4tCk-1zVz49ligSUHSDzLI-GDzuTMWzcKy74GHPCU9dbVVqXDCbPVRRcmE4w&usqp=CAU" alt="profile-img" className="profile-img"/>
//                            <p> Naam: {profile.firstname} {profile.lastname} </p>
//                              <p> Gender: {profile.gender} </p>
//                          <p> Geboortedatum: {profile.birthday} </p>
//                          <p> Mijn e-mail adres: {profile.email} </p>
//                          <p> Mijn telefoonnummer: {profile.phone} </p>
//                         <p> Mijn website: {profile.website} </p>
//                             </span>
//                                 </article>
//
//                             )
//                         })}
//                     </div>
//                 </section>
//             </main>
//         </>
//     );
// }
//
//
// export default AllProfiles;