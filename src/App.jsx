import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../src/Fonts/fontFace.sass"

import Login from "./Pages/LoginPage/login.jsx"
import HomePage from "./Pages/HomePage/home.jsx"

function App(){
    return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        
      </Routes>
    </BrowserRouter>
    )
}

export default App