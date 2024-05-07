import { useState , useEffect} from "react"
import { Form   , Outlet, useNavigate } from "react-router-dom"
import {SignUpRestaurant} from "../../../../config/api.js"
import "./RegisterRestaurantForm.sass"
import { PiEyeBold , PiEyeClosedBold  } from "react-icons/pi";
import CompleteBar from "../../../../standard/components/completeBar.jsx"
import FirstForm from "./RegisterForm/FirstForm.jsx";
import AddressForm from "./AddressForm/addressForm.jsx";
import { Routes, Route } from "react-router-dom";


export default function RegisterRestaurantFormArea({NEXT , setNEXT}){


    const [Data , setData] = useState({
        Login : null , 
        Address : null,
        Images : null
    })
    console.log(Data)
    const Login = Data.Login = {
        username : '',
        password : '',
        confirm : '',
        email:'' ,
        
    }

    console.log(Data.Login)

    

    return(
        <div id="formRegisterRestaurant" className=" lg:h-3/4 lg:w-2/5 bg-white p-11 relative shadow-slate-900 shadow-lg sm:w-full h-full ">
            <div className="flex justify-between flex-col">
             <h1 style={{fontFamily: 'Gilroy' , fontSize:"3rem"}}>Cadastre seu restaurante</h1>
             <CompleteBar tarefas={'3'}/>
            </div>
            {/* 3 melhores imagens do seu restaurante */}
                <Routes>
                    <Route path={'/'} element={<FirstForm LoginComp={Login} setData={setData} NEXT={NEXT} setNEXT={setNEXT} />}></Route>
                    <Route path={"/address"} element={<AddressForm />} />
                </Routes>
            <Outlet/>
            </div>
        
    )
    
      
    
}