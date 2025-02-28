import React, { useState, useEffect } from "react";
import PicaSlider from "../../components/picaslider/PicaSlider";
import "./Profile.css";
import NavBar from "../../components/navbar/NavBar";

function Profile() {
    const [imageUrl, setImageUrl] = useState(
        localStorage.getItem("profileImage") ||
        "https://cdn.pixabay.com/photo/2017/03/27/14/55/photographer-2179204_1280.jpg"
    );
    const [inputValue, setInputValue] = useState("");

    const [profile, setProfile] = useState({
        name: localStorage.getItem("profileName") || "",
        age: localStorage.getItem("profileAge") || "",
        city: localStorage.getItem("profileCity") || "",
        gender: localStorage.getItem("profileGender") || "",
        search: localStorage.getItem("profileSearch") || "", // ✅ Correct opgeslagen
        comments: localStorage.getItem("profileComments") || "",
    });

    useEffect(() => {
        // ✅ Profielgegevens correct opslaan
        localStorage.setItem("profileName", profile.name);
        localStorage.setItem("profileAge", profile.age);
        localStorage.setItem("profileCity", profile.city);
        localStorage.setItem("profileGender", profile.gender);
        localStorage.setItem("profileSearch", profile.search); // 🔥 Opgelost! Dit werd overschreven.
        localStorage.setItem("profileComments", profile.comments);
    }, [profile]);

    useEffect(() => {
        // Profielfoto opslaan in localStorage
        localStorage.setItem("profileImage", imageUrl);
    }, [imageUrl]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleUpload = () => {
        if (inputValue.match(/\.(jpg|jpeg|png)$/i)) {
            setImageUrl(inputValue);
            localStorage.setItem("profileImage", inputValue);
        } else {
            alert("Enter a valid image URL (jpg, jpeg, or png).");
        }
    };

    const handleProfileChange = (event) => {
        const { name, value } = event.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <>
            <NavBar/>
            <main className="test-page">
                <div className="content-container">
                    <h3>My Profile</h3>
                    <div className="input-container">
                        <PicaSlider
                            minRange="100"
                            maxRange="600"
                            nameAttribuut="image-slider"
                            imageUrl={imageUrl}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={profile.name}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="age">Age:</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            value={profile.age}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="city">City:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            value={profile.city}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            name="gender"
                            value={profile.gender}
                            onChange={handleProfileChange}
                        >
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Rather not tell">Rather not tell</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="search">Looking for:</label>
                        <select
                            id="search"
                            name="search"
                            value={profile.search}
                            onChange={handleProfileChange}
                        >
                            <option value="">Select your option:</option>
                            <option value="Date">A date</option>
                            <option value="Friendship">Friendship</option>
                            <option value="LongTerm">Long-term relationship</option>
                            <option value="Fun">Just fun</option>
                            <option value="RatherNotSay">Rather not tell</option>
                        </select>
                    </div>
                    <div className="input-container">
                        <label htmlFor="comments">About Me:</label>
                        <textarea
                            id="comments"
                            name="comments"
                            placeholder="Shortly about me"
                            value={profile.comments}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="imageUrlInput">My Pica:</label>
                        <input
                            type="text"
                            id="imageUrlInput"
                            placeholder="Paste an image URL (jpg, jpeg, or png)"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleUpload}>Upload</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Profile;