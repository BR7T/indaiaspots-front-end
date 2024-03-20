import "./componentsLogin.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";

export default function FormLogin(){
    return(
        <div id="formArea">
        <form action="post">

            <label htmlFor="email">
                Email 
                <BiUser className="inputIcons"/>
            </label>

            <input type="email" id="email" placeholder="Insira seu Email" autoComplete={"off"}/>
            <label htmlFor="password">
                Senha
                <MdPassword className="inputIcons"/>
            </label>
            <input type="password" id="password" placeholder="Insira sua senha"/>
            <a href="#" id="forgotYP">Esqueceu sua senha?</a>


            <button type="submit" ><p>Entrar</p> <IoIosArrowDropright id="ArrowIcon"/></button>
        </form>
    </div>  
    )
}