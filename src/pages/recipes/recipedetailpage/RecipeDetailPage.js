import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import './RecipeDetailPage.css';
import RecipeFilter from '../../../components/filterrecipes/RecipeFilter';
import NavBar from "../../../components/navbar/NavBar";
import LoadAnimation from "../../../components/loadanimation/LoadAnimation";

function RecipeDetailPage() {
    const {recipeId} = useParams();
    const [recipe, setRecipe] = useState(null);
    const [allRecipes, setAllRecipes] = useState([]);
    const [ingredients, setIngredients] = useState(['chicken', 'tomato', 'onion']);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRecipe() {
            setError(null);

            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
                setRecipe(response.data.meals?.[0] || null);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    setError("Something went wrong while loading the recipe.");
                }

            }
        }

        fetchRecipe();

        return () => {
            controller.abort();
        };

    }, [recipeId]);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchAllRecipes() {
            setError(null);

            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                setAllRecipes(response.data.meals || []);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    console.error(error);
                    setError("Something went wrong while retrieving all recipes.");
                }

            }
        }

        fetchAllRecipes();

        return () => {
            controller.abort();
        };

    }, []);

    return (
        <>
            <LoadAnimation/>
            <NavBar/>
            <header className="recipe-header">
                <h2>{recipe ? recipe.strMeal : "Recipe not found"}</h2>
            </header>

            <section className="recipes-card recipe-detail-card">
                {error && <p className="error">{error}</p>}

                {recipe ? (
                    <>
                        <Link to={`/category/${recipe.strCategory}`} className="back-link"> ⬅ Back
                            to {recipe.strCategory} recipes </Link>
                        <img src={recipe.strMealThumb} alt={recipe.strMeal}/>
                        <p>{recipe.strInstructions}</p>
                        <br/>
                        <Link to={`/category/${recipe.strCategory}`} className="back-link"> ⬅ Back
                            to {recipe.strCategory} recipes
                        </Link>
                    </>
                ) : (
                    <p>No recipe found.</p>
                )}
            </section>

            <section className="filter-list">
                <RecipeFilter recipes={allRecipes} ingredients={ingredients}/>
            </section>
        </>
    );
}

export default RecipeDetailPage;