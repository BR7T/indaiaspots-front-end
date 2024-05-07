import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterRestaurantFormArea from "./components/FormRestaurantRegister/RegisterRestaurantForm";
import "./RegisterRestaurant.sass"

export default function ResgisterRestaurant(){
    const [NEXT, setNEXT] = useState(false)
    const navigate = useNavigate()


    useEffect(()=>{
        console.log(NEXT)
        if(!NEXT){
            navigate('/restaurant/add/')
        }else{
            navigate('/restaurant/add/address')
        }
    },[NEXT])

    
    return(
        <article id="RegisterRestaurantPage">
            <RegisterRestaurantFormArea NEXT = {NEXT} setNEXT = {setNEXT}/>
        </article>
    )
}