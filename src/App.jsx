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
  const [RestInfo , setRestInfo] = useState([])
  useEffect(()=>{
    getAllRestaurants().then((r)=>{
      setRestInfo(r.data)
    })
  },[])
    return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurant/add" element={<RegisterRestaurant/>}></Route>
        <Route path="*" element={<h1>404</h1>}></Route>
        <Route path="/teste/:id" element={<RestaurantCard LoginRes={RestInfo}/>}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App