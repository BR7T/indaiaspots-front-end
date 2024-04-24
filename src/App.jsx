import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/Fonts/fontFace.sass"

import Login from "./Pages/LoginPage/login";
import HomePage from "./Pages/HomePage/home.jsx"
import Register from  "./Pages/RegisterPage/Register"
import RegisterRestaurant from "./Pages/RegisterRestaurant/RegisterRestaurant";
import TESTE from "./test/test";

function App(){
    return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/restaurant/add" element={<RegisterRestaurant/>}></Route>
        <Route path="/TESTEFOTO" element={<TESTE/>}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App