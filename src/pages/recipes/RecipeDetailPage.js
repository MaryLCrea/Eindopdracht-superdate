import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './recipes.css';
import Header from "../../components/header/Header";

function RecipeDetailPage() {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
              axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
            .then(response => {
                setRecipe(response.data.meals[0]);
            })
            .catch(error => console.error("Er is iets misgegaan", error));
    }, [recipeId]);

    return (
        <>
            <Header/>

        <div className="recipes-container recipe-detail-container">
            {recipe ? (
                <>
                    <h2>{recipe.strMeal}</h2>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <p>{recipe.strInstructions}</p>
                    <br/>
                    <Link to={`/category/${recipe.strCategory}`}> ⬅ Back to {recipe.strCategory} recipes </Link>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </>
    );
}

export default RecipeDetailPage;
