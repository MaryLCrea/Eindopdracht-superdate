import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './recipes.css';
import Header from "../../components/header/Header";

function RecipesPage() {
    const { categoryName } = useParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchRecipesByCategory() {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
                setRecipes(response.data.meals);
            } catch (error) {
                console.error("Something went wrong while retrieving recipes by category:", error);
            }
        }

        fetchRecipesByCategory();
    }, [categoryName]);

    return (
        <>
            <Header/>
        <div className="recipes-card">
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
