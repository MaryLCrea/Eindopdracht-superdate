import React, { useState } from "react";
import PicaSlider from "../../components/picaslider/PicaSlider";
import "./Profile.css";
import Header from "../../components/header/Header";

function Profile() {
    const [imageUrl, setImageUrl] = useState(
        "https://cdn.pixabay.com/photo/2017/03/27/14/55/photographer-2179204_1280.jpg"
    );
    const [inputValue, setInputValue] = useState("");
    const [profile, setProfile] = useState({
        name: "",
        age: "",
        city: "",
    });

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleUpload = () => {
        if (inputValue.match(/\.(jpg|jpeg|png)$/i)) {
            setImageUrl(inputValue);
        } else {
            alert("Voer een geldige afbeeldings-URL in (jpg, jpeg, of png).");
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

            <Header/>
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
                        <br />
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
                        <br />
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
                        <br />
                        <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Enter your city"
                            value={profile.city}
                            onChange={handleProfileChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="imageUrlInput">Here you can past a link to upload a new picture</label>
                        <br/>
                        <input
                            type="text"
                            id="imageUrlInput"
                            placeholder="Here you can past the new link with a jpg, jpeg or png extension"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button onClick={handleUpload}>
                            Upload
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Profile;

