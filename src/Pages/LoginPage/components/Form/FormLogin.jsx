import "./componentsLogin.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";





export default function FormLogin(){
    const [Login, setLogin] = useState({
        email : "",
        password : ""
    })

    function Send(){
        console.log(Login.email)
        console.log(Login.password)
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
                e.preventDefault()
                Send()
            }}>
                <p>Entrar</p> <IoIosArrowDropright id="ArrowIcon"/>
            </button>
            
        </form>
    </div>  
    )
}