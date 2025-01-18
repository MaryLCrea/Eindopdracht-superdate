import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './recipes.css';
import Header from "../../components/header/Header";
import RecipeFilter from '../../components/filterrecipes/RecipeFilter';

function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [ingredients, setIngredients] = useState(['', '', '']);

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => console.error("Er is iets misgegaan", error));
    }, []);

      useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(response => {
                setAllRecipes(response.data.meals);
            })
            .catch(error => console.error("Er is iets misgegaan", error));
    }, []);

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    return (
        <>
            <Header />
                      <div className="filter-section">
                <h3>Zoek op ingrediënten</h3>
                <div className="ingredient-inputs">
                    {[0, 1, 2].map(index => (
                        <input
                            key={index}
                            type="text"
                            placeholder={`Ingrediënt ${index + 1}`}
                            value={ingredients[index]}
                            onChange={(e) => handleIngredientChange(index, e.target.value)}
                        />
                    ))}
                </div>
                <RecipeFilter recipes={allRecipes} ingredients={ingredients} />
            </div>

                     <div className="recipes-container">
                <h2 className="recipes-title">Categories</h2>
                <ul className="categories-list">
                    {categories.map(category => (
                        <li key={category.idCategory}>
                            <Link to={`/category/${category.strCategory}`}>
                                <img
                                    className="recipes-image"
                                    src={category.strCategoryThumb}
                                    alt={category.strCategory}
                                />
                                {category.strCategory}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default CategoriesPage;