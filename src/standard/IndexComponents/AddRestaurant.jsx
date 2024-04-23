import { useNavigate , Navigate} from "react-router-dom"



export default function ButtonAdd(){
    const Navigate = useNavigate()


    return(
        <button id="AddButton" className='border-white bg-white rounded-lg hover:border-red-600 border-2 hover:text-black   transition ease-in-out duration-300 font-semibold h-full p-2'onClick={()=>{
                    Navigate("/restaurant/add")
        }}>
            Adicione seu restaurante
        </button>
    )
}