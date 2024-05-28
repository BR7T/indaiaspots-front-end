import { useState , useEffect} from "react"
import { useState , useEffect} from "react"
import { useNavigate, Navigate } from "react-router-dom"
import ButtonAdd from "../../standard/IndexComponents/AddRestaurant"
import Loading from "../../standard/Loading/loading"
import Loading from "../../standard/Loading/loading"
import CardArea from "./components/CardArea/CardArea"
import Header from "./components/Header/header"
import "./home.sass"
import { getAllRestaurants } from "../../config/api"
import { getAllRestaurants } from "../../config/api"

function Home(){
    const [loading, setloading] = useState(true)
    useEffect(()=>{
        const timer = setTimeout(() => {
            setloading(false);
          }, 1500);

          

          return () => clearTimeout(timer);
    },[])
    

   return(
    <div className="h-full">
    {loading ? <Loading/> : (
        
            <div id="HOME">
                <Header/>
                <main>
                    <CardArea/>
                   
                </main>
            </div>
        
    )}
   </div>
   )
   return(
    <div className="h-full">
    {loading ? <Loading/> : (
        
            <div id="HOME">
                <Header/>
                <main>
                    <CardArea/>
                   
                </main>
            </div>
        
    )}
   </div>
   )
}

export default Home