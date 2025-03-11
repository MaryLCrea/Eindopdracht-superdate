import React, { useState } from 'react';
import './FilterProfiles.css';

const FilterProfiles = ({ data }) => {
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedAgeCategory, setSelectedAgeCategory] = useState('');

    const ageRanges = {
        young: [0, 18],
        adult: [19, 35],
        senior: [36, 65],
    };

    const filteredData = data.filter(item => {
        const matchGender = !selectedGender || item.gender === selectedGender;
        const matchAge =
            !selectedAgeCategory || (item.age >= ageRanges[selectedAgeCategory][0] && item.age <= ageRanges[selectedAgeCategory][1]);
        return matchGender && matchAge;
    });

    return (
        <div className="page-container">
            <section className="filters-section">
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
            </section>

            <div className="inner-profiles-box">
                {filteredData.map(profile => (
                    <article className="profile-card" key={profile.id}>
                        <h6>{profile.firstname}</h6>
                        <span>
                            <img
                                src="https://cdn.pixabay.com/photo/2016/11/21/12/35/woman-1845100_1280.jpg"
                                alt="profile-img"
                                className="profile-img"
                            />
                            <p>Name: {profile.firstname} {profile.lastname}</p>
                            <p>Gender: {profile.gender}</p>
                            <p>Age: {profile.age}</p>
                            <p>Date of birth: {profile.birthday}</p>
                            <p>My e-Mail address: {profile.email}</p>
                            <p>My Phone number: {profile.phone}</p>
                            <p>My website: {profile.website}</p>
                        </span>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default FilterProfiles;




