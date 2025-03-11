import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import './RecipesPage.css';
import NavBar from "../../../components/navbar/NavBar";

function RecipesPage() {
    const {categoryName} = useParams();
    const [recipes, setRecipes] = useState([]);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchRecipesByCategory() {
           toggleError(false);

            try {
                const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
                    {signal}
                );
                setRecipes(response.data.meals || []);

            } catch (error) {
                if (!axios.isCancel(error)) {
                    console.error("Error fetching recipes:", error);
                    toggleError(true);
                }
                      }
        }

        fetchRecipesByCategory();

        return () => {
            controller.abort();
        };

    }, [categoryName]);

    return (
        <>
            <NavBar/>
            <section className="recipes-card">
                <br/>
                <Link to="/CategoriesPage" className="back-link">
                    ⬅ Back to categories
                </Link>
                <h2 className="recipes-title">Recipes: {categoryName}</h2>

                {error && <p className="error">Failed to load recipes. Please try again later.</p>}

                {!error && recipes.length === 0 && (
                    <p>No recipes found for the category "{categoryName}". Please try another category.</p>
                )}

                {!error && recipes.length > 0 && (
                    <ul className="recipes-list">
                        {recipes.map(recipe => (
                            <li key={recipe.idMeal}>
                                <Link to={`/recipe/${recipe.idMeal}`}>
                                    <img className="recipes-image" src={recipe.strMealThumb} alt={recipe.strMeal}/>
                                    {recipe.strMeal}
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
                <br/>
                <Link to="/CategoriesPage" className="back-link">
                    ⬅ Back to categories
                </Link>
            </section>
        </>
    );
}

export default RecipesPage;