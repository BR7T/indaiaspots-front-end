import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "../src/Fonts/fontFace.sass"

import Login from "./Pages/LoginPage/login";
import HomePage from "./Pages/HomePage/home.jsx"
import Register from  "./Pages/RegisterPage/Register"
import RegisterRestaurant from "./Pages/RegisterRestaurant/RegisterRestaurant";
import Restaurantcard from "./Pages/IndividualCard/RestaurantCard";
import NotFound from "./Pages/404/error404.jsx";

function App(){
    return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurant/add/*" element={<RegisterRestaurant/>}></Route>
        <Route path="/teste/:id" element={< Restaurantcard/>}></Route>
        <Route path=""></Route>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    )
}

export default App