import React from 'react';
import './FilterProfiles.css';

const FilterProfiles = ({ data, gender, ageCategory }) => {
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
            {filteredData.map(profile => (
                <article className="profile-card" key={profile.id}>
                    <h6>{profile.firstname}</h6>
                    <span>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuoV7tXoX4tCk-1zVz49ligSUHSDzLI-GDzuTMWzcKy74GHPCU9dbVVqXDCbPVRRcmE4w&usqp=CAU"
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