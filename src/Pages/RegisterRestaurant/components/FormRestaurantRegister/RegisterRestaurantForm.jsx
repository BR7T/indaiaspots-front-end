import { useState } from "react"
import { Form } from "react-router-dom"
import {SignUpRestaurant} from "../../../../config/api.js"
import "./RegisterRestaurantForm.sass"
import CompleteBar from "../../../../standard/components/completeBar.jsx"

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
        <div id="formRegisterRestaurant" className=" h-4/6 w-2/5 bg-white p-20 relative">
            <div className="flex justify-between flex-col h-1/6">
             <h1 style={{fontFamily: 'Gilroy' , fontSize:"3.2rem"}}>Cadastre seu restaurante</h1>
             <CompleteBar tarefas={'4'}/>
            </div>
            {/* <form id="FORMRegister" action="">

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
            </button> */}
{/* 3 melhores imagens do seu restaurante */}
            <form action="" id="FormSingInRestaurant" className="">
                <div ><label htmlFor="name">Nome do restaurante:</label>
                <input type="text" id="name" placeholder="Nome" className="InputRestaurant "/></div>
                <div><label htmlFor="email">Seu email:</label>
                <input type="email" id='email'placeholder="exemplo@gmail.com" className="InputRestaurant"/></div>
                <div className="flex align-center justify-between w-full">
                    <div className="flex flex-col "><label htmlFor="password">Sua senha:</label>
                    <input type="password" id="password" placeholder="Insira sua senha..." className="InputRestaurant"/></div>
                    <div className="flex flex-col"><label htmlFor="password">Confirme sua senha: </label>
                    <input type="password" id="password" placeholder="Confirme sua senha..." className="InputRestaurant"/></div>
                </div>
            </form>
            <div>
                <pre>
                    sua senha deve conter:
                        Mais de 8 caracteres
                        Letra maiuscula e minúscula
                        
                </pre>


                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  self-end">
                    Avançar
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>

            </div>

        </div>
        
    )
    
      
    
}