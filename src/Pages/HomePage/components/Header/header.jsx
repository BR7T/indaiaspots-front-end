import Images from "../../../../../public/Image/images"
import "./header.sass"

import { useNavigate } from "react-router"




export default function Header(){
    let navigate = useNavigate()
    return(
        <header className="shadow-sm">
            <div id="LogoArea" className="display-flex">
                <div id="LogoHeader">
                    <img src={Images.Logo} alt="" />
                </div>
                <p className="">INDSPTS</p>
            </div>
            


            <div id="BuscaArea">
                <nav></nav>
            </div>

            <div id="SignInSignUp">
                <button className='border-2 border-red-600 rounded-lg bg-red-600 text-white font-semibold  hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-300'
               
                >
                    Cadastre-se
                </button>
                <button className='w-24 border-2 border-red-600 bg-white rounded-lg hover:bg-red-600 hover:text-white text-red-600 transition ease-in-out duration-300 font-semibold'
                 onClick={()=>{
                        navigate("/login")
                    }
                }>
                    Login
                </button>
            </div>
            
        </header>
    )
}