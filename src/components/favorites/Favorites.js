import React, { useState } from "react";


const Favorites = ({ recipe }) => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const handleAddToFavorites = (recipe) => {
        const newFavorites = [...favorites, recipe];
        setFavorites(newFavorites);
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
    };

    const handleRemoveFromFavorites = (recipeId) => {
        const updatedFavorites = favorites.filter((item) => item.idMeal !== recipeId);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const isFavorite = favorites.some((item) => item.idMeal === recipe.idMeal);

    return (
        <section>
            {isFavorite ? (
                <button onClick={() => handleRemoveFromFavorites(recipe.idMeal)}>Remove from Favorites</button>
            ) : (
                <button onClick={() => handleAddToFavorites(recipe)}>Add to Favorites</button>
            )}
        </section>
    );
};

export default Favorites;