import Images from "../../../../../public/Image/images"
import "./header.sass"




export default function Header(){
    return(
        <header>
            <div id="LogoArea">
                <div id="LogoHeader">
                    <img src={Images.Logo} alt="" />
                </div>
                <p>INDSPTS</p>
            </div>
            


            <div id="BuscaArea">
                <nav></nav>
            </div>

            <div id="Shortcuts">
                <p>Login</p>
            </div>
        </header>
    )
}