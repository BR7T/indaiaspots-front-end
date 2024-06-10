import Images from "../../../../../public/Image/images";
import "./header.sass";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router"
import ButtonAdd from "../../../../standard/IndexComponents/AddRestaurant";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { checkToken, logout, searchRestaurant } from "../../../../config/api";
import { CgProfile } from "react-icons/cg";
import { Dropdown, DropdownHeader } from 'flowbite-react';



export default function Header({setSearchResults, setNoResults}){
    
    const navigate = useNavigate();

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

    const [searchTerm, setSearchTerm] = useState('');
    const debounceTimeout = useRef(null);
    const handleSearchInputChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            if (!value == '') {
                searchRestaurant(value).then(res => {
                    if(res.data.length == 0) {
                        setNoResults(true);
                    } else {
                        setSearchResults(res.data);
                        setNoResults(false);
                    }
                });
            } else {
                setSearchResults({});
            }
        }, 1000);
    }

    return(
        
        <header className="shadow-sm gap-2">

            <div id="LogoArea" className="display-flex cursor-pointer" onClick={()=>window.location.href = '/'} >
                <div id="LogoHeader">
                    <img src={Images.Logo} alt="" />
                </div>
                <p className="hidden md:block">INDSPTS</p>
            </div>
            
            <div id="BuscaArea">
                <input type="text" id="searchInput" placeholder="Pesquisar..." onChange={handleSearchInputChange}/>
                <button id="searchButton" className="bg-red-600">
                    <IoSearch/>
                </button>
            </div>
            
            {   
                isLoggedIn === null ? ( <div></div> ) :
                isLoggedIn ? (
                    <>
                        <Dropdown label={<button className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg px-5 py-2.5 text-sm  text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                            <p className="mx-4">{username.split(' ')[0]}</p> 
                            <CgProfile className="w-5 h-5"/>
                        </button>}>
                        <div className="group-hover:pointer-events-auto">
                        <DropdownHeader className="px-4 py-3 text-sm text-gray-900 dark:text-white hover:bg-gray-100 cursor-pointer select-none">
                            <div>{username}</div>
                            <div className="font-medium truncate">{email}</div>
                        </DropdownHeader>
                        <Dropdown.Item onClick={()=>{logout().then(res=>window.location.href = '/login')}}>
                            Sair
                        </Dropdown.Item>
                        </div>
                        </Dropdown>
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
