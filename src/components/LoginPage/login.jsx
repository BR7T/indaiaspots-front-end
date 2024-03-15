import { Link , Outlet } from "react-router-dom"
import FormLogin from "./components/FormLogin"

import "./login.sass"



export default function Login(){

   

    return(
        <main>
            

            <div id="LoginArea">
                <div id="title">
                    <div id="icon">
                        A
                    </div>
                        <h1>Login</h1>
                    </div>
                <div id="alterLogin">
                    <button>Google</button><button>Instagram</button>
                </div>
                <FormLogin/>
            </div>
            

            <aside>
                <h4>Indaiaspots</h4>
            </aside>
        </main>
    )
}