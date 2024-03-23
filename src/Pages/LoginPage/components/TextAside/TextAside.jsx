import "./TextAside.sass";
import I from "../../../../../public/label.json"
import { LuPartyPopper } from "react-icons/lu";
import { IoRestaurant } from "react-icons/io5";
import DetailBar from "../../../../standard/detailBar";
import ButtonLogin from "../../../../standard/button";

export default function TextAside(){
    function IconsChange(){
        switch(I.Login[0].type){
            case "party":
                return <LuPartyPopper/>
            break;
            case "food":
                return <IoRestaurant/>
                break;
            
        }
    }


    return(
        <article id="TextAside">
            <div id="TitleTextAside">
                <h1>Indaia<span>Spots</span></h1>
            </div>
            
            <div id="ChangeLocations">
            
                <div id="changeName">

                    <h1>{I.Login[0].name}</h1>
                    <DetailBar
                    wid = "40%"
                    />
                    <h1>{
                        IconsChange()
                        }</h1>

                </div>
                <div id="changeDesc">

                    <p>{I.Login[0].desc}</p>

                </div>
                <div id="ButtonChange">
                        <ButtonLogin text="Saiba Mais"/>
                </div>
                <div id="changeRate"></div>




            </div>
            <nav id="dotSelectedArea">
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
            </nav>
        </article>
    )
}