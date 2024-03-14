import { Link , Outlet } from "react-router-dom"

import "./login.sass"

export default function Login(){
    return(
        <main>
            

            <div id="LoginArea">
                <div id="title"><h1>Login</h1></div>
                <div id="alterLogin">
                    <button>Google</button><button>Instagram</button>
                </div>
                <div id="formArea">
                    <form action="post">
                        <label htmlFor="email">Email</label>
                        <input type="email" />
                        <label htmlFor="password">Senha</label>
                        <input type="password" />
                            
                        <button type="submit">Entrar</button>
                    </form>
                </div>
            </div>
            
        </main>
    )
}