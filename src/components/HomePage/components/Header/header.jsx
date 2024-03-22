import Images from "../../../../../public/Image/images"
import "./header.sass";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div id="LogoArea">
        <div id="LogoHeader">
                    <img src={Images.Logo} alt="" />
                </div>
        <p>INDSPTS</p>
      </div>

      <div id="BuscaArea">
  <input type="text" id="searchInput" placeholder="Pesquisar..." />
  <button id="searchButton">Pesquisar</button>
</div>


<div id="Shortcuts">
        <div id="ButtonContainer">
          <Link to="/login" id="loginLink">Login</Link>
          <span>|</span>
          <Link to="/register" id="registerLink">Registrar-se</Link>
        </div>
      </div>
    </header>
  );
}
