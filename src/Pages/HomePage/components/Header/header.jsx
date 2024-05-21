import Images from "../../../../../public/Image/images";
import "./header.sass";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router"
import ButtonAdd from "../../../../standard/IndexComponents/AddRestaurant";
import { useState } from "react";
import { useEffect } from "react";
import { checkToken, logout } from "../../../../config/api";
import { CgProfile } from "react-icons/cg";


export default function Header(){
    
    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useEffect(() => {
        checkToken().then(response => {
            setIsLoggedIn(response);
        })
    }, []);
    
    return(
        <header className="shadow-sm gap-2">

            <div id="LogoArea" className="display-flex">
                <div id="LogoHeader">
                    <img src={Images.Logo} alt="" />
                </div>
                <p className="">INDSPTS</p>
            </div>
            

            <div id="BuscaArea">
                <input type="text" id="searchInput" placeholder="Pesquisar..." />
                <button id="searchButton" className="bg-red-600">
                    <IoSearch/>
                </button>
            </div>
            
            {   
                isLoggedIn === null ? ( <div></div> ) :
                isLoggedIn ? ( 
                    <div className="flex items-center">
                        <div 
                            className="mr-4 cursor-pointer" 
                            onClick={() => {
                                logout().then(response => {
                                    window.location.href = '/login';
                                })
                            }}
                        >
                            Sair
                        </div>
                        <CgProfile className="h-10 w-10 mr-4"/>
                    </div>
                ) :
                (
                    <div id="SignInSignUp">
                        <button className='border-2 border-red-600 rounded-lg bg-red-600 text-white font-semibold  hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-300'
                    onClick={()=>
                        navigate("/register")
                    }>
                            Cadastre-se
                        </button>

                        <button className=' border-white bg-white rounded-lg hover:border-red-600 border-2 hover:text-black   transition ease-in-out duration-300 font-semibold'
                        onClick={()=>
                            navigate("/login")
                        }>
                            Login
                        </button>
                        <ButtonAdd/>
                    </div>
                )}
        </header>
    )
}
