import "./componentsLogin.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";
import { GoogleSignInRequest } from "../../../../config/api";
import { signInWithGoogle } from "../../../../config/firebase";





export default function FormLogin(){
    const [Login, setLogin] = useState({
        email : "",
        password : ""
    })



    return(
    <div id="formArea">
        <form id="formLogin" action="post">

            <label htmlFor="email" className="text-base">
                Email 
                <BiUser className="inputIcons"/>
            </label>

            <input type="email" id="email" placeholder="Insira seu Email" autoComplete={"off"}
             onChange={
                (e)=>{
                   const Email =  e.target.value
                   setLogin({...Login , email : Email})
                }
            }/>
            <label htmlFor="password" className="text-base">
                Senha
                <MdPassword className="inputIcons"/>
            </label>
            <input type="password" id="password" placeholder="Insira sua senha"
             onChange={
                (e)=>{
                   const Password =  e.target.value
                   
                   setLogin({...Login , password : Password})
                }
            }
                />
            <a href="#" id="forgotYP" className="text-s">Esqueceu sua senha?</a>


            <button onClick={(e)=>{
                e.preventDefault()
                signInWithGoogle(Login);
                console.log(Login);
            }}>
                <p>Entrar</p> <IoIosArrowDropright id="ArrowIcon"/>
            </button>
            
        </form>
    </div>  
    )
}