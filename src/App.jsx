import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "../src/Fonts/fontFace.sass"

import Login from "./Pages/LoginPage/login";
import HomePage from "./Pages/HomePage/home.jsx"
import Register from  "./Pages/RegisterPage/Register"
import RegisterRestaurant from "./Pages/RegisterRestaurant/RegisterRestaurant";
import RestaurantCard from "./Pages/IndividualCard/RestaurantCard";
import { getAllRestaurants } from "./config/api";
import { useEffect, useState } from "react";



function App(){
    return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurant/add/*" element={<RegisterRestaurant/>}></Route>
        <Route path="/teste/:id" element={<RestaurantCard />}></Route>
        <Route path="/*" element={<h1>Página não encontrada</h1>}/>
        
      </Routes>
    </BrowserRouter>
    )
}

export default App