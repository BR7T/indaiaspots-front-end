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
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        checkToken().then(response => {
            setIsLoggedIn(response.data.isValid);
            setUsername(response.data.username);
            setEmail(response.data.email);
        })
    }, []);
    
    return(
        <header className="shadow-sm gap-2">

            <div id="LogoArea" className="display-flex">
                <div id="LogoHeader">
                    <img src={Images.Logo} alt="" />
                </div>
                <p className="hidden md:block">INDSPTS</p>
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
                    <>
                    <button id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" type="button">
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    <p className="mx-4">{username.split(' ')[0]}</p> 
                    <CgProfile className="w-5 h-5"/>
                    </button>
                    <div id="dropdownInformation" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                        <div>{username}</div>
                        <div className="font-medium truncate">{email}</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Configurações</a>
                        </li>
                        </ul>
                        <div className="py-2">
                        <button className="w-full text-red-600 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" onClick={()=>{logout().then(res=>window.location.href = '/login')}}>Sign out</button>
                        </div>
                    </div>
</>
                ) :
                (
                <>
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
                </>
                )}
        </header>
    )
}
