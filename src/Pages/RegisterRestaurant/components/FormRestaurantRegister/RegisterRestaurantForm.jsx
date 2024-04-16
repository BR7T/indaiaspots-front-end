import { useState } from "react"
import {SignUpRestaurant} from "../../../../config/api.js"
import "./RegisterRestaurantForm.sass"


export default function RegisterRestaurantForm(){
    const [Restaurant, setRestaurant] = useState({
        nome: "",
        contato: "",
        horario_atendimento: "",
        dia_atendimento: "" ,
        tipo_cozinha: "",
        CNPJ : "",
        Endereco : ""
    })    

    function Effect(e, nome){
        const Item =  e.target.value
        setRestaurant({...Restaurant , [nome] : Item})
        console.log(`${nome} : ${Item}`)
    }

   

    return(
        <div id="formRegisterRestaurant" className=" h-4/6 w-1/2 bg-white p-8">
            <h1>Register Restaurant</h1>
            <form id="FORMRegister" action="">

                <div className="flex gap-4 ">
                    <input className=" INPUT" type="text" placeholder="contato" onChange={(e)=>{Effect(e,"contato")}}/> 

                    <input className=" INPUT" type="text" placeholder="Nome do restaurante" onChange={(e)=>{Effect(e,"nome")}}/>
                </div>

                <input type="text" className="INPUT" placeholder="local" onChange={(e)=>{Effect(e,"horario_atendimento")}}/>

                <input type="text"className="INPUT" placeholder="Horário" onChange={(e)=>{Effect(e,"dia_atendimento")}}/>

                <input type="text" className="INPUT"placeholder="Dias" onChange={(e)=>{Effect(e,"tipo_cozinha")}}/>
                <input type="text" className="INPUT"placeholder="CNPJ" onChange={(e)=>{Effect(e,"CNPJ")}}/>
                <input type="text" className="INPUT"placeholder="Endereco" onChange={(e)=>{Effect(e,"Endereco")}}/>
            </form>
            <button className="bg-green-400 p-4 rounded-lg" onClick={()=>SignUpRestaurant(Restaurant)}>
                Fazer parte!
            </button>
        </div>
    )
    
      
    
}