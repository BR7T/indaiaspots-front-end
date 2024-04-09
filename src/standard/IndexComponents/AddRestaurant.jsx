import { useNavigate , Navigate} from "react-router-dom"
import "./IndexComponents.sass"


export default function ButtonAdd(){
    const Navigate = useNavigate()


    return(
        <button id="AddButton" onClick={()=>{
                    Navigate("/restaurant/add")
        }}>
            Adicione seu restaurante
        </button>
    )
}