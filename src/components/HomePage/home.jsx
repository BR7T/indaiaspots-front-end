import { Link } from "react-router-dom"
import Header from "./components/Header/header"
import "./home.sass"


function Home(){
    return(
        <div id="HOME">
            <Header/>
            
            <h1>Home Page</h1>
            <Link to="/login">Login</Link>
        </div>
    )
}

export default Home