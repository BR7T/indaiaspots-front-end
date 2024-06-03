import { useState , useEffect} from "react"
import { Form   , Outlet, useNavigate } from "react-router-dom"
import "./RegisterRestaurantForm.sass"
import CompleteBar from "../../../../standard/components/completeBar.jsx"
import FirstForm from "./RegisterForm/FirstForm.jsx";
import AddressForm from "./AddressForm/addressForm.jsx";
import { Routes, Route } from "react-router-dom";
import WorkTime from "../WorkTime/WorkTime.jsx";


export default function RegisterRestaurantFormArea({NEXT , setNEXT}){
    

    const [Data , setData] = useState({
        Login: {
            username: '',
            password: '',
            confirm: '',
            email: '',
        },
        Address: {
            RazaoSocial: "",
            CNPJ: "",
            Rua: "",
            Bairro: "",
            Numero: "",
            ID_Restaurante : ''
        },
        Image: '',
        WorkTime: {
            Dias : '',
        Horas : {
            Abre: "",
            Fecha:"",
        },
        },
        Tipo :'',
        Icone :'',
    })
    
    return(
        <div id="formRegisterRestaurant" className=" lg:h-3/4 lg:w-2/5 bg-white p-11 relative shadow-slate-900 shadow-lg sm:w-full h-full ">
            <div className="flex justify-between flex-col">
             <h1 style={{fontFamily: 'Gilroy' , fontSize:"3rem"}}>Cadastre seu restaurante</h1>
             <CompleteBar tarefas={'4'}/>
            </div>
            {/* 3 melhores imagens do seu restaurante */}
                <Routes>
                    <Route path={'/'} element={<FirstForm LoginComp={Data.Login} setData={setData} NEXT={NEXT} setNEXT={setNEXT} />}></Route>
                    <Route path={"/address"} element={<AddressForm Address = {Data.Address} All={Data.Login} setNEXT={setNEXT}/>} />
                    <Route path={"/horaedia"} element={<WorkTime Hour = {Data.WorkTime}  All={Data} setNEXT={setNEXT}/>} />
                </Routes>
            <Outlet/>
            </div>
        
    )
}