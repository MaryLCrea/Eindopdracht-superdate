import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './recipes.css';
import Header from "../../components/header/Header";

function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
               axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => {
                setCategories(response.data.categories);
            })
            .catch(error => console.error("Er is iets misgegaan", error));
    }, []);

    return (
<>
    <Header/>

        <div className="recipes-container">

            <h2 className="recipes-title">Categories</h2>
            <ul className="categories-list">
                {categories.map(category => (
                    <li key={category.idCategory}>
                        <Link to={`/category/${category.strCategory}`}>
                            <img className="recipes-image" src={category.strCategoryThumb} alt={category.strCategory} />
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