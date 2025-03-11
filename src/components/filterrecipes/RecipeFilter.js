import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RecipeFilter.css';

const RecipeFilter = ({ recipes, ingredients }) => {
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const filterRecipes = () => {
        const matchesThree = [];
        const matchesTwo = [];
        const matchesOne = [];

        recipes.forEach(recipe => {
            const recipeIngredients = Object.values(recipe).join(' ').toLowerCase();
            const matchCount = ingredients.filter(ingredient =>
                recipeIngredients.includes(ingredient.toLowerCase())
            ).length;

            if (matchCount === 3) {
                matchesThree.push(recipe);
            } else if (matchCount === 2) {
                matchesTwo.push(recipe);
            } else if (matchCount === 1) {
                matchesOne.push(recipe);
            }
        });

        if (matchesThree.length > 0) {
            setFilteredRecipes(matchesThree);
        } else if (matchesTwo.length > 0) {
            setFilteredRecipes(matchesTwo);
        } else if (matchesOne.length > 0) {
            setFilteredRecipes(matchesOne);
        } else {
            setFilteredRecipes([]);
        }
        setHasSearched(true);
    };

    return (
        <div className="filter-section">
            <button onClick={filterRecipes}>Filter Recipes</button>
            {filteredRecipes.length > 0 ? (
                <div className="filter-recipes-gallery">
                    {filteredRecipes.map(recipe => (
                        <div key={recipe.idMeal} className="filter-recipes-item">
                            <Link to={`/recipe/${recipe.idMeal}`} className="recipe-link">
                                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                                <h3>{recipe.strMeal}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                hasSearched && <p>No recipes found with the specified ingredients.</p>
            )}
        </div>
    );
};

export default RecipeFilter;
