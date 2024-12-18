import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './recipes.css';
import Header from "../../components/header/Header";

function RecipesPage() {
    const { categoryName } = useParams();  // Haal de categorie naam uit de URL
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
                axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            .then(response => {
                setRecipes(response.data.meals);
            })
            .catch(error => console.error("Er is iets misgegaan", error));
    }, [categoryName]);

    return (
        <>
            <Header/>
        <div className="recipes-container">

            <br/>
            <Link to="/CategoriesPage" className="back-link">
                ⬅ Back to categories
            </Link>
            <h2 className="recipes-title">Recipes: {categoryName}</h2>
            <ul className="recipes-list">
                {recipes.map(recipe => (
                    <li key={recipe.idMeal}>
                        <Link to={`/recipe/${recipe.idMeal}`}>
                            <img className="recipes-image" src={recipe.strMealThumb} alt={recipe.strMeal} />
                            {recipe.strMeal}
                        </Link>

                    </li>
                ))}

            </ul>
            <br/>
            <Link to="/CategoriesPage" className="back-link">
                ⬅ Back to categories
            </Link>
        </div>
        </>
    );
}


export default RecipesPage;
