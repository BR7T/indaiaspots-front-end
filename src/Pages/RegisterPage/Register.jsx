import { Link , useNavigate, Outlet, json } from "react-router-dom"
import { IoLogoGoogle  } from "react-icons/io";


import "./Register.sass"

import Images from "../../../public/Image/images";
import Header from "../HomePage/components/Header/header";

import { signInWithGoogle } from "../../config/firebase";
import TextAside from "../LoginPage/components/TextAside/TextAside";
import FooterLogin from "../LoginPage/components/Footer/footerLogin";
import FormRegister from "./components/FormRegister/FormRegister";
import { IoMdArrowRoundBack } from "react-icons/io";
import BackButton from "../../standard/LoginComponents/BackButton";




export default function Register(){

   const Navigate = useNavigate()

    return(
        <>
                
            <div id="RegisterPage" className="">
            <aside id="TextAsideArea">
                    <TextAside/>
                </aside>
                <main id="mainRegister" className="w-2/5 h-5/6 rounded-xl  ">
                    
                    <div id="RegisterArea" className=" justify-center h-full" >
                        <BackButton pagelink='/'/>
                        
                        <div id="title">  
                            <h1 className="text-5xl text-start">Cadastre-se</h1>
                        </div>
                        
                        <FormRegister/>
                        <p>Ou</p>
                        <div id="alterRegister" onClick={()=>{
                            signInWithGoogle();
                        }}>
                            <button
                            ><IoLogoGoogle/> Continuar com o Google</button>
                        </div>
                        <div className=" -right-1/2 absolute bg-red-600 w-1/2 h-1/4 rounded-3xl bg-white shadow bottom-0">

                        </div>
                    </div>

                </main>
               
            </div>
            
            <FooterLogin/>

            
        </>
    )
}