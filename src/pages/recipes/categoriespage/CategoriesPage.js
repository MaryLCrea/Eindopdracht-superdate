import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeFilter from "../../../components/filterrecipes/RecipeFilter";
import {Link} from "react-router-dom";
import NavBar from "../../../components/navbar/NavBar";
import './CategoriesPage.css';

function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [ingredients, setIngredients] = useState(['', '', '']);
    const [error, toggleError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchCategories() {
            try {
                              const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setCategories(response.data.categories);
            } catch (error) {
                if (!axios.isCancel(error)) {
                    console.error(e);
                    toggleError("Failed to load categories. Please try again later.");
            }
             }
        };
            fetchCategories();

        return () => {
            controller.abort();
        };

    }, []);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                               const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                setAllRecipes(response.data.meals);
            } catch (error) {
                toggleError("Failed to load recipes. Please try again later.");

        }
        };

        fetchRecipes();
    }, []);

    const handleIngredientChange = (index, value) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = value;
        setIngredients(newIngredients);
    };

    return (
        <>
            <NavBar/>
            <section className="filter-list">
                <section className="search-box">
                    <h3>Welcome to the recipes page </h3>
                    <p className="description-text"> We hope you like SuperDate, where everything comes together because
                        love goes through the stomach, right?
                        Are you looking for a nice date or do you just want inspiration for a delicious meal? Both are
                        possible here! Browse profiles of singles who love cooking (and eating) as much as you do. Or
                        use
                        our smart search function: enter 1, 2 or 3 ingredients and discover tasty recipes to impress
                        your
                        date, be in the kitchen together, or just to treat yourself. Who knows, maybe you will find your
                        perfect match and the recipe for happiness here. 🍷💑🍝 Create a profile, try a recipe and be
                        surprised! </p>
                    <h6>Search by ingredients</h6>

                    <section className="ingredient-inputs">
                        {[0, 1, 2].map(index => (
                            <input
                                key={index}
                                type="text"
                                placeholder={`Ingrediënt ${index + 1}`}
                                value={ingredients[index]}
                                onChange={(e) => handleIngredientChange(index, e.target.value)}
                            />
                        ))}
                    </section>

                </section>
                <RecipeFilter recipes={allRecipes} ingredients={ingredients}/>
            </section>

            <section className="recipes-card">
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
            </section>
        </>

    );
}

export default CategoriesPage;