import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import './RecipeDetailPage.css';
import RecipeFilter from '../../../components/filterrecipes/RecipeFilter';
import NavBar from "../../../components/navbar/NavBar";

function RecipeDetailPage() {
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [allRecipes, setAllRecipes] = useState([]);
    const [ingredients, setIngredients] = useState(['chicken', 'tomato', 'onion']);

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
                setRecipe(response.data.meals[0]);
            } catch (error) {
                console.error("Something went wrong while loading the recipe:", error);
            }
        }

        fetchRecipe();
    }, [recipeId]);

    useEffect(() => {
        async function fetchAllRecipes() {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                setAllRecipes(response.data.meals);
            } catch (error) {
                console.error("Something went wrong while retrieving all recipes:", error);
            }
        }

        fetchAllRecipes();
    }, []);

    return (
        <>
            <NavBar/>
            <div className="recipes-card recipe-detail-card">
                {recipe ? (
                    <>
                        <h2>{recipe.strMeal}</h2>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                        <p>{recipe.strInstructions}</p>
                        <br/>
                        <Link to={`/category/${recipe.strCategory}`}> ⬅ Back to {recipe.strCategory} recipes </Link>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <div className="filter-list">

                <RecipeFilter recipes={allRecipes} ingredients={ingredients}/>
            </div>
        </>
    );
}

export default RecipeDetailPage;