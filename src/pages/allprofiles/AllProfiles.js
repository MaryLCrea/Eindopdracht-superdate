import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FilterProfiles from "../../components/filterprofiles/FilterProfiles";
import './AllProfiles.css';
import NavBar from "../../components/navbar/NavBar";

function AllProfiles() {
    const [profile, setProfile] = useState([]);
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedAgeCategory, setSelectedAgeCategory] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=100&');
                const profilesWithAge = response.data.data.map(profile => ({
                    ...profile,
                    age: new Date().getFullYear() - new Date(profile.birthday).getFullYear(),
                }));
                console.log("Opgehaalde data:", profilesWithAge);
                setProfile(profilesWithAge);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <NavBar/>
            <main>
                <section className="outer-page-container">
                    <article className="inner-profiles-container">
                            <article className="filters">
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
                                <select value={selectedAgeCategory}
                                        onChange={(e) => setSelectedAgeCategory(e.target.value)}>
                                    <option value="">Alle</option>
                                    <option value="young">0-18</option>
                                    <option value="adult">19-35</option>
                                    <option value="senior">36-65</option>
                                </select>
                            </label>
                        </article>
                        <FilterProfiles
                            data={profile}
                            gender={selectedGender}
                            ageCategory={selectedAgeCategory}
                        />
                    </article>
                </section>
            </main>
        </>
    );
}

export default AllProfiles;

