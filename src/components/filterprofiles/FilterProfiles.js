import React, {useState} from 'react';
import './FilterProfiles.css';

const FilterProfiles = ({data}) => {
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedAgeCategory, setSelectedAgeCategory] = useState('');

    const ageRanges = {
        young: [18, 25],
        adult: [25, 45],
        senior: [46, 65],
    };

    const filteredData = data.filter(item => {
        const matchGender = !selectedGender || item.gender === selectedGender;
        const matchAge =
            !selectedAgeCategory || (item.dob.age >= ageRanges[selectedAgeCategory][0] && item.dob.age <= ageRanges[selectedAgeCategory][1]);
        return matchGender && matchAge;
    });

    return (
        <section className="page-container">
            <section className="filters-section">
                <header>
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
                        <option value="young">18-25</option>
                        <option value="adult">25-45</option>
                        <option value="senior">46-65</option>
                    </select>
                </label>
                </header>
            </section>

            <secion className="inner-profiles-box">
                {filteredData.map(profile => (
                    <article className="profile-card" key={profile.login.uuid}>
                        <h6>{profile.name.first} {profile.name.last}</h6>
                        <span>
                            <img
                                src={profile.picture.large}
                                alt={`${profile.name.first} ${profile.name.last}`}
                                className="profile-img"
                            />
                            <p>Name: {profile.name.first} {profile.name.last}</p>
                            <p>Gender: {profile.gender}</p>
                              <p>My age: {profile.dob.age}</p>
                            <p>Country: {profile.location.country}</p>
                            <p>City: {profile.location.city}</p>
                            <p>My e-Mail: {profile.email}</p>
                        </span>
                    </article>
                ))}
            </secion>
        </section>
    );
};

export default FilterProfiles;




