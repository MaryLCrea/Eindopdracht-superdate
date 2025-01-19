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
                const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=100&');
                const profilesWithAge = response.data.data.map(profile => ({
                    ...profile,
                    age: new Date().getFullYear() - new Date(profile.birthday).getFullYear(),
                }));
                console.log("Ophaalde data:", profilesWithAge);
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

// const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=100&');

