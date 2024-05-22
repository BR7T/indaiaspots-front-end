import Images from "../../../../../public/Image/images";
import "./header.sass";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import ButtonAdd from "../../../../standard/IndexComponents/AddRestaurant";
import { useState, useEffect, useRef } from "react";
import { checkToken, logout } from "../../../../config/api";
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    checkToken().then((response) => {
      setIsLoggedIn(response);
    });

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="shadow-sm p-4 lg:p-0">
      <div
        id="LogoArea"
        onClick={() => {
          navigate("/");
        }}
      >
        <div id="LogoHeader">
          <img src={Images.Logo} alt="Logo" className="h-10" />
        </div>
        <p
          className={`font-bold ${
            menuOpen ? "hidden sm:block" : "hidden sm:block"
          }`}
        >
          INDSPTS
        </p>
      </div>

      <div
        id="BuscaArea"
        className="flex items-center flex-grow justify-center p-10"
      >
        <input
          type="text"
          id="searchInput"
          placeholder="Pesquisar..."
          className="border rounded-l-lg p-10 lg:w-auto"
        />
        <button id="searchButton" className="bg-red-600 p-2 rounded-r-lg">
          <IoSearch />
        </button>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      <div
        ref={menuRef}
        className={`absolute top-16 left-0 w-full bg-white flex flex-col items-center py-4 transition-transform duration-300 transform ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden lg:relative lg:flex lg:flex-row lg:top-0 lg:opacity-100 lg:max-h-full lg:transform-none lg:py-0 lg:bg-transparent lg:w-auto`}
      >
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          {isLoggedIn === null ? (
            <div></div>
          ) : isLoggedIn ? (
            <div
              className="flex flex-col lg:flex-row items-center gap-4"
              onClick={closeMenu}
            >
              <div
                className="cursor-pointer"
                onClick={() => {
                  logout().then((response) => {
                    window.location.href = "/login";
                  });
                }}
              >
                Sair
              </div>
              <CgProfile className="h-10 w-10" />
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-4">
              <button
                className="border-2 border-red-600 rounded-lg bg-red-600 text-white font-semibold hover:bg-white hover:text-red-600 hover:border-red-600 transition-all duration-300"
                onClick={() => {
                  navigate("/register");
                  closeMenu();
                }}
              >
                Cadastre-se
              </button>
              <button
                className="border-white bg-white rounded-lg hover:border-red-600 border-2 hover:text-black transition ease-in-out duration-300 font-semibold"
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
              >
                Login
              </button>
              <ButtonAdd />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
