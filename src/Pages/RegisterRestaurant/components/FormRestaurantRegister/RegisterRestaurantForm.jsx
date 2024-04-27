import { useState , useEffect} from "react"
import { Form } from "react-router-dom"
import {SignUpRestaurant} from "../../../../config/api.js"
import "./RegisterRestaurantForm.sass"
import { PiEyeBold , PiEyeClosedBold  } from "react-icons/pi";
import CompleteBar from "../../../../standard/components/completeBar.jsx"
import FirstForm from "./RegisterForm/RegisterRestaurantForm.jsx";
import AddressForm from "./AddressForm/addressForm.jsx";

export default function RegisterRestaurantFormArea(){

    const [LoginRes, setLoginRes] = useState({
        username: "",
        email: "",
        password: "",
        confirm: ""
    });
    const [Data , setData] = useState({})
    return(
        <div id="formRegisterRestaurant" className=" lg:h-3/4 lg:w-2/5 bg-white p-11 relative shadow-slate-900 shadow-lg sm:w-full h-full ">
            <div className="flex justify-between flex-col">
             <h1 style={{fontFamily: 'Gilroy' , fontSize:"3rem"}}>Cadastre seu restaurante</h1>
             <CompleteBar tarefas={'3'}/>
            </div>
            {/* 3 melhores imagens do seu restaurante */}
            {}
            <FirstForm LoginRes ={LoginRes} setLoginRes = {setLoginRes}/>
            

        </div>
        
    )
    
      
    
}