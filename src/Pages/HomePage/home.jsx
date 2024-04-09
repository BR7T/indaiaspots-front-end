import { useNavigate, Navigate } from "react-router-dom"
import ButtonAdd from "../../standard/IndexComponents/AddRestaurant"
import Header from "./components/Header/header"
import "./home.sass"


function Home(){
    const Navigate = useNavigate()


    return(
        <div id="HOME">
            <Header/>
            <main>
                <ButtonAdd/>
            </main>
        </div>
    )
}

export default Home