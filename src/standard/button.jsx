import "./LoginComponents.sass"
import { FaArrowRight } from "react-icons/fa";


export default function ButtonLogin(prop){
    return(
        <>
        
        <button className="ButtonLogin">
            <div className="circleButton">
                <div id="detailInsideButton">
                    <FaArrowRight id="iconArrow"/>
                </div>
            </div>
            {prop.text}
        </button>
        </>
    )
}