import "./FormRegister.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword , MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";
import { GoogleSignInRequest } from "../../../../config/api";
import { signInWithGoogle } from "../../../../config/firebase";





export default function FormRegister(){
    const [Register, setRegister] = useState({
        email : "",
        password : "",
        name: "",
        confirmPassword : ""
    })



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
                   setRegister({...Register , email : Email})
                }
            }/>
            <label htmlFor="name" className="text-base">
                Nome
                <MdDriveFileRenameOutline className="inputIcons"/>
            </label>
            <input type="text" id="name" placeholder="Insira seu nome"
             onChange={
                (e)=>{
                   const Name =  e.target.value
                   
                   setRegister({...Register , name : Name})
                }
            }
                />
            <section className="flex gap-5">
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Insira sua senha"
                    onChange={
                        (e)=>{
                        const confirm =  e.target.value
                        
                        setRegister({...Register , confirmPassword : confirm})
                        }
                    }
                        />
                </div>

                <div>
                    <label htmlFor="passwordRepeat">Confirme</label>
                    <input type="password" name="password" id="passwordRepeat"  placeholder="Confirme sua senha"/>
                </div>

            </section>


            <button onClick={(e)=>{
                e.preventDefault()
                signInWithGoogle(Register);
                console.log(Register);
            }}>
                <p>Entrar</p> <IoIosArrowDropright id="ArrowIcon"/>
            </button>
            
        </form>
    </div>  
    )
}