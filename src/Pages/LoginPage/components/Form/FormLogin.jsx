import "./componentsLogin.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";
import { signInRequest } from "../../../../config/api";
import {useNavigate} from "react-router-dom"


export default function FormLogin(){
    const [Login, setLogin] = useState({
        email : "",
        password : ""
    })

    const Navigate = useNavigate();
    
    function loginRequest(){
        signInRequest(Login)
        .then(res => {
            if(res.data.process) {
                Navigate("/");
            }
        })
    }

    return(
    <div id="formArea">
        <form action="post">

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
                e.preventDefault();
                loginRequest();
            }}>
                <p>Entrar</p> <IoIosArrowDropright id="ArrowIcon"/>
            </button>
            
        </form>
    </div>  
    )
}