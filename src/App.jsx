import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/LoginPage/login.jsx"
import HomePage from "./components/HomePage/home.jsx"
import Register from "../src/components/RegisterPage/Register"

function App(){
    return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
    )
}

export default App