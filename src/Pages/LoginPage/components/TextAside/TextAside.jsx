import "./TextAside.sass";
import Local from "../../../../../public/label.json"
import { LuPartyPopper } from "react-icons/lu";
import { IoRestaurant } from "react-icons/io5";
import DetailBar from "../../../../standard/detailBar";
import ButtonLogin from "../../../../standard/button";
import { FaRegStarHalfStroke , FaStar , FaRegStar   } from "react-icons/fa6";

export default function TextAside(){
    function IconsChange(){
        switch(Local.Login[0].type){
            case "party":
                return <LuPartyPopper/>
            break;
            case "food":
                return <IoRestaurant/>
                break;
            
        }
    }

    function Stars(){
        let nota = Local.Login[0].rate 
        nota > 5 ? nota = 5 : nota = nota
        let notacontrol = nota
        let Nota0 = [
            <FaRegStar/>,<FaRegStar/>,<FaRegStar/>,<FaRegStar/>,<FaRegStar/>
        ]
        for(let i = 0 ; i < nota ; i++){

            notacontrol -= 1
            if(notacontrol < 0){
                Nota0.splice(i,1,<FaRegStarHalfStroke/>)
            }
            else{
                Nota0.splice(i,1,<FaStar/>)
            }
            console.log(notacontrol)
        }
        return Nota0
    }

    return(
        <article id="TextAside" >
            <div id="TitleTextAside">
                <h1>Indaia<span>Spots</span></h1>
            </div>
            
            <div id="ChangeLocations">
            
                <div id="changeName">

                    <h1>{Local.Login[0].name}</h1>
                    <DetailBar
                    wid = "45%"
                    />
                    <h1>{
                        IconsChange()
                        }</h1>

                </div>
                <div id="changeDesc">

                    <p>{Local.Login[0].desc}</p>

                </div>
                <div id="changeRate" className="text-4xl flex">
                    {Stars()}
                </div>
                <div id="ButtonChange">
                        <ButtonLogin text="Saiba Mais" />
                </div>




            </div>
            <nav id="dotSelectedArea">
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
            </nav>
        </article>
    )
}