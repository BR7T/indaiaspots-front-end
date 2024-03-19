import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/LoginPage/login.jsx"
import HomePage from "./components/HomePage/home.jsx"

function App(){
    return(
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        
      </Routes>
    </BrowserRouter>
    )
}

export default App