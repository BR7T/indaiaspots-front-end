import { Link } from "react-router-dom"
import Header from "./components/Header/header"
import "./home.sass"


function Home(){
    return(
        <div id="HOME">
            <Header/>
            <main>
                <h1>Home Page</h1>
                <Link to="/login">Login</Link>
            </main>
        </div>
    )
}

export default Home