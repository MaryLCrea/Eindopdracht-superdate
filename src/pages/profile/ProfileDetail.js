import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from "../../components/header/Header";

function ProfileDetail() {
    const { profileId } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const response = await axios.get('https://fakerapi.it/api/v1/persons?_quantity=100&');
                const profilesWithAge = response.data.data.map(profile => ({
                    ...profile,
                    age: new Date().getFullYear() - new Date(profile.birthday).getFullYear(),
                }));
                const foundProfile = profilesWithAge.find((p) => p.id.toString() === profileId);
                setProfile(foundProfile);
            } catch (e) {
                setError("Er is iets fout gegaan bij het ophalen van het profiel.");
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchProfile();
    }, [profileId]);

    if (loading) return <p>Gegevens laden...</p>;
    if (error) return <p>{error}</p>;
    if (!profile) return <p>Geen profiel gevonden.</p>;

    return (
        <>
            <Header />
            <main>
                <section className="profile-detail">
                    <h1>Profiel van {profile.firstname} {profile.lastname}</h1>
                    <p><strong>Leeftijd:</strong> {profile.age}</p>
                    <p><strong>Geslacht:</strong> {profile.gender}</p>
                    <p><strong>Email:</strong> {profile.email}</p>
                    <p><strong>Telefoon:</strong> {profile.phone}</p>
                    <p><strong>Adres:</strong> {profile.address.street}, {profile.address.city}</p>
                </section>
            </main>
        </>
    );
}

export default ProfileDetail;