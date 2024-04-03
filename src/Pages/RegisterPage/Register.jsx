import { Link , useNavigate, Outlet, json } from "react-router-dom"
import { IoLogoGoogle  } from "react-icons/io";


import "./Register.sass"

import Images from "../../../public/Image/images";
import Header from "../HomePage/components/Header/header";

import { signInWithGoogle } from "../../config/firebase";
import TextAside from "../LoginPage/components/TextAside/TextAside";
import FooterLogin from "../LoginPage/components/Footer/footerLogin";
import FormRegister from "./components/FormRegister/FormRegister";




export default function Register(){

   const Navigate = useNavigate()

    return(
        <>
                
            <div id="RegisterPage">
            <aside id="TextAsideArea">
                    <TextAside/>
                </aside>
                <main id="mainRegister" className="w-2/5 h-2/3 rounded-xl  ">
                    
                    <div id="RegisterArea" className=" justify-center h-full" >
                        
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
                    </div>
                    

                </main>
               
            </div>
            
            <FooterLogin/>

            
        </>
    )
}