import "./TextAside.sass";
import Local from "../../../../../public/label.json"
import { LuPartyPopper } from "react-icons/lu";
import { IoRestaurant } from "react-icons/io5";
import DetailBar from "../../../../standard/detailBar";
import ButtonLogin from "../../../../standard/button";
import { IoIosStarOutline , IoIosStarHalf , IoIosStar  } from "react-icons/io";


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
            <IoIosStarOutline key="1"/>,<IoIosStarOutline key="2"/>,<IoIosStarOutline key="3"/>,<IoIosStarOutline key="4"/>,<IoIosStarOutline key="5"/>
        ]
        for(let i = 0 ; i < nota ; i++){

            notacontrol -= 1
            if(notacontrol < 0){
                Nota0.splice(i,1,<IoIosStarHalf key={i}/>)
            }
            else{
                Nota0.splice(i,1,<IoIosStar key={i}/>)
            }
            
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
                <div className="dotSelected selected"></div>
                <div className="dotSelected"></div>
                <div className="dotSelected"></div>
            </nav>
        </article>
    )
}