import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css'

const Restaurant = () => {
    const [searchText, setSearchText] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(response => response.json())
        .then(data=>setMeals(data.meals))
    },[meals])
    const searchMeals = (e) => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h1>Find Your meals { meals.length }</h1>
            <input onChange={searchMeals} type="text" placeholder="search" />
            <br />
            <div className="meals-container">
                {
                    meals.map(meal=><Meal meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;