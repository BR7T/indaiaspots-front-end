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
        Images: null,
        WorkTime: {
            Dias : {
                seg:"seg" , ter:'ter' , qua:'qua', qui:'qui' , sex:'sex' , sab:'sab' , dom:'dom'
                },
        Horas : {
            Abre: "",
            Fecha:""
        }
        }
    })
    
    return(
        <>
        <div id="formRegisterRestaurant"
        className='m-2 w-screen  sm:m-0 lg:h-3/4 lg:w-2/5 bg-white p-10 relative shadow-slate-900 shadow-lg md:rounded-3xl flex flex-col justify-evenly'
        >
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
            </>
    )
}