import { Link , Outlet } from "react-router-dom"
import FormLogin from "./components/FormLogin"

import "./login.sass"



export default function Login(){

   

    return(
        <div id="LoginPage">
        <main>
            

            <div id="LoginArea">
            <div id="icon">Indaia <br /> Spots</div>
                <div id="title">  
                    <h1>Login</h1>
                </div>
                <div id="alterLogin">
                    <button>Google</button><button>Instagram</button>
                </div>
                <FormLogin/>
            </div>
            

            <aside>
               
            </aside>
        </main>
        </div>
    )
}