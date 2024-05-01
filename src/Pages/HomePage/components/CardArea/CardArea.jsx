import { useState , useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { getAllRestaurants } from "../../../../config/api"
import "./CardArea.sass"



export default function CardArea(){
    
    const [Restaurantes, setRestaurantes] = useState([])
    useEffect(() => {
        getAllRestaurants().then(r=>{
          setRestaurantes(r.data)}
          )
    }, [])
    
    console.table(Restaurantes)
    return(
        <div className="CardArea">
            {Restaurantes && Restaurantes.map((Res , index)=>{
                let nome = Res.Nome
                let dia = Res.Dia_Atendimento  
                let id = Res.ID_Restaurante
                
                
                return(
                    
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-10/12">
                <a href="#">
                    <img class="rounded-t-lg" src="https://img.freepik.com/fotos-premium/restaurante_23-2148014999.jpg?w=1380" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{nome}</h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{dia}</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba Mais
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    
                    <Link to={`/teste/${id}`}>Testinho</Link>
                </div>
            </div>

                )
            })}
        </div>
    )
}