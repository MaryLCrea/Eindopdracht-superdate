import React from 'react';
import './App.css';
import SignIn from "./pages/signin/SignIn";
import SignUp from "./pages/signup/SignUp";
import Home from "./pages/home/Home";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import Contact from "./pages/contact/Contact";
import AlgVw from "./pages/algvw/AlgVw";
import Profile from "./pages/profile/Profile";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import AllProfiles from "./pages/allprofiles/AllProfiles";
import CategoriesPage from "./pages/recipes/CategoriesPage";
import RecipeDetailPage from "./pages/recipes/RecipeDetailPage";
import RecipesPage from "./pages/recipes/RecipesPage";
import NotFound from "./pages/notfound/NotFound";

function App() {

    return (
        <>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/SignUp">
                    <SignUp/>
                </Route>
                <Route exact path="/SignIn">
                    <SignIn/>
                </Route>
                <Route exact path="/Profile">
                    <Profile/>
                </Route>
                <Route exact path="/AllProfiles">
                    <AllProfiles/>
                </Route>
                <Route exact path="/About">
                    <About/>
                </Route>
                <Route exact path="/AlgVw">
                    <AlgVw/>
                </Route>
                <Route exact path="/Contact">
                    <Contact/>
                </Route>
                <Route exact path="/CategoriesPage">
                    <CategoriesPage/>
                </Route>
                <Route>
                    <Route path="/category/:categoryName" component={RecipesPage}/>
                    <Route path="/recipe/:recipeId" component={RecipeDetailPage}/>
                    <Route path="/" element={<AllProfiles/>}/>
                    <Route component={NotFound}/>
                </Route>
            </Switch>
            <Footer/>
        </>
    );
}

export default App;


