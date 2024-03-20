import { Link , Outlet } from "react-router-dom"
import FormLogin from "./components/Form/FormLogin"

import { IoLogoGoogle  } from "react-icons/io";



import "./login.sass"

import Images from "../../../public/Image/images";
import FooterLogin from "./components/Footer/footerLogin";
import Header from "../HomePage/components/Header/header";

export default function Login(){

   

    return(
        <>
            <div id="LoginPage">
                <Header/>

                <main id="mainLogin">
                    
                    <div id="LoginArea">
                        
                        <div id="title">  
                            <h1>Login</h1>
                        </div>
                        
                        <FormLogin/>
                        <p>Ou</p>
                        <div id="alterLogin">
                            <button><IoLogoGoogle/> Continuar com o Google</button>
                        </div>
                    </div>
                    

                </main>
                <FooterLogin/>
            </div>

            <aside id="TextAside">
                
            </aside>
        </>
    )
}