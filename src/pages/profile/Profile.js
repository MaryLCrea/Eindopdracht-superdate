import React, {useState, useEffect} from "react";
import PicaSlider from "../../components/picaslider/PicaSlider";
import NavBar from "../../components/navbar/NavBar";
import "./Profile.css";
import {Link} from "react-router-dom";

function Profile() {
    const [imageUrl, setImageUrl] = useState(
        localStorage.getItem("profileImage") ||
        "https://cdn.pixabay.com/photo/2017/03/27/14/55/photographer-2179204_1280.jpg"
    );
    const [inputValue, setInputValue] = useState("");
    const [favorites, setFavorites] = useState([]);

    const [profile, setProfile] = useState({
        name: localStorage.getItem("profileName") || "",
        age: localStorage.getItem("profileAge") || "",
        city: localStorage.getItem("profileCity") || "",
        gender: localStorage.getItem("profileGender") || "",
        search: localStorage.getItem("profileSearch") || "",
        comments: localStorage.getItem("profileComments") || "",
    });

    useEffect(() => {
        Object.entries(profile).forEach(([key, value]) => {
            localStorage.setItem(`profile${key.charAt(0).toUpperCase() + key.slice(1)}`, value);
        });
    }, [profile]);

    useEffect(() => {
        localStorage.setItem("profileImage", imageUrl);
    }, [imageUrl]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(savedFavorites);
    }, []);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleUpload = () => {
        if (inputValue.match(/\.(jpg|jpeg|png)$/i)) {
            setImageUrl(inputValue);
            localStorage.setItem("profileImage", inputValue);
        } else {
            alert("Enter a valid image URL (jpg, jpeg, or png). ");
        }
    };

    const handleProfileChange = (event) => {
        const {name, value} = event.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    return (
        <>
            <NavBar/>
            <section className="my-page">
                <section className="content-container">
                    <header>
                        <h3>My Profile</h3>
                    </header>
                    <section className="input-container">
                        <PicaSlider
                            minRange={100}
                            maxRange={600}
                            nameAttribuut="image-slider"
                            imageUrl={imageUrl}
                            onSizeChange={(newSize) => setImageUrl(imageUrl)}
                        />

                    </section>
                    <section className="input-container">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="Enter your name" value={profile.name}
                               onChange={handleProfileChange}/>
                    </section>
                    <section className="input-container">
                        <label htmlFor="age">Age:</label>
                        <input type="number" id="age" name="age" placeholder="Enter your age" value={profile.age}
                               onChange={handleProfileChange}/>
                    </section>
                    <section className="input-container">
                        <label htmlFor="city">City:</label>
                        <input type="text" id="city" name="city" placeholder="Enter your city" value={profile.city}
                               onChange={handleProfileChange}/>
                    </section>
                    <section className="input-container">
                        <label htmlFor="gender">Gender:</label>
                        <select id="gender" name="gender" value={profile.gender} onChange={handleProfileChange}>
                            <option value="">Select your gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                            <option value="Rather not tell">Rather not tell</option>
                        </select>
                    </section>
                    <section className="input-container">
                        <label htmlFor="search">Looking for:</label>
                        <select id="search" name="search" value={profile.search} onChange={handleProfileChange}>
                            <option value="">Select your option:</option>
                            <option value="Date">A date</option>
                            <option value="Friendship">Friendship</option>
                            <option value="LongTerm">Long-term relationship</option>
                            <option value="Fun">Just fun</option>
                            <option value="Don't know yet">Rather not tell</option>
                        </select>
                    </section>
                    <section className="input-container">
                        <label htmlFor="comments">About Me:</label>
                        <textarea id="comments" name="comments" placeholder="Shortly about me" value={profile.comments}
                                  onChange={handleProfileChange}/>
                    </section>
                    <section>
                        <label htmlFor="imageUrlInput">My Pica:</label>
                        <input type="text" id="imageUrlInput" placeholder="Paste an image URL (jpg, jpeg, or png)"
                               value={inputValue} onChange={handleInputChange}/>
                        <button type="submit" onClick={handleUpload}>Upload</button>
                    </section>
                </section>

                <section className="content-container">
                    <section className="favorites-container">
                        <h4>My Favorite Recipes</h4>
                        {favorites.length === 0 ? (
                            <p>No favorite recipes yet.</p>
                        ) : (
                            <ul>
                                {favorites.map((recipe, index) => (
                                    <li key={index}>
                                        <Link to={`/recipe/${recipe.idMeal}`} className="recipe-link">
                                            {recipe.strMeal}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                </section>
            </section>
        </>
    );
}

export default Profile;