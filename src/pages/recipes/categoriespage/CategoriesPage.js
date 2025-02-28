import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RecipeFilter from "../../../components/filterrecipes/RecipeFilter";
import {Link} from "react-router-dom";
import NavBar from "../../../components/navbar/NavBar";

function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [allRecipes, setAllRecipes] = useState([]);
    const [ingredients, setIngredients] = useState(['', '', '']);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                setCategories(response.data.categories);
            } catch (error) {
                console.error("Something went wrong while loading categories:", error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const response = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=');
                setAllRecipes(response.data.meals);
            } catch (error) {
                console.error("Something went wrong while retrieving recipes:", error);
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
            <div className="filter-list">
                <div className="search-box">
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

                </div>
                <RecipeFilter recipes={allRecipes} ingredients={ingredients}/>
            </div>


            <div className="recipes-card">
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