import React from 'react';
import './FilterProfiles.css';

const FilterProfiles = ({data, gender, ageCategory}) => {
    const ageRanges = {
        young: [0, 18],
        adult: [19, 35],
        senior: [36, 65],
    };

    const filteredData = data.filter(item => {
        const matchGender = !gender || item.gender === gender;
        const matchAge =
            !ageCategory || (item.age >= ageRanges[ageCategory][0] && item.age <= ageRanges[ageCategory][1]);
        return matchGender && matchAge;
    });

    return (
        <div className="inner-profiles-container">
            <div className="filters"></div>
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
            <p>Date of birth: {profile.birthday}</p>
            <p>My e-Mail address: {profile.email}</p>
            <p>My Phone number: {profile.phone}</p>
            <p>My website: {profile.website}</p>
          </span>
                </article>
            ))}
        </div>
    );
};

export default FilterProfiles;