import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterRestaurantFormArea from "./components/FormRestaurantRegister/RegisterRestaurantForm";
import "./RegisterRestaurant.sass"

export default function ResgisterRestaurant(){
    const [NEXT, setNEXT] = useState(0)
    const navigate = useNavigate()


    useEffect(()=>{
        // if(!NEXT){
        //     navigate('/restaurant/add/')
        // }else{
        //     navigate('/restaurant/add/address')
        // }
        switch (NEXT) {
            case 0:
                navigate('/restaurant/add/')
                break;
            case 1:
                navigate('/restaurant/add/address')
                break
            case 2:
                navigate('/restaurant/add/horaedia')
                break
            default:
                break;
        }
    },[NEXT])

    
    return(
        <article id="RegisterRestaurantPage">
            <RegisterRestaurantFormArea NEXT = {NEXT} setNEXT = {setNEXT}/>
        </article>
    )
}