import "./componentsLogin.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";


function SignUp(req){
    fetch('http://localhost:3100/user/signup', {   
        method : 'POST',
        body : JSON.stringify({email : req.email , password : req.password}),
        mode: 'cors',
        cache: 'default',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .then(response => {
    })
}


export default function FormLogin(){
    const [Login, setLogin] = useState({
        email : "",
        password : ""
    })

    function Send(){
        SignUp(Login)
        console.log(Login)
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