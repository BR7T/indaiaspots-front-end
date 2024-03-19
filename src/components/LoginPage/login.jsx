import { Link , Outlet } from "react-router-dom"
import FormLogin from "./components/FormLogin"

import { IoLogoGoogle } from "react-icons/io";


import "./login.sass"

import Images from "../../../public/Image/images";

export default function Login(){

   

    return(
        <div id="LoginPage">
        <main>
            

            <div id="LoginArea">
                <div id="icon">
                    <img src={Images.Logo} alt="Logo" />
                    <p>IndaiaSpots</p>
                </div>
                <div id="title">  
                    <h1>Login</h1>
                </div>
                
                <FormLogin/>
                <p>Ou</p>
                <div id="alterLogin">
                    <button><IoLogoGoogle/> Continuar com o Google</button>
                </div>
            </div>
            

            <aside>
               
            </aside>
        </main>
        </div>
    )
}