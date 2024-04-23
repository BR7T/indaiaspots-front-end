import { useState , useEffect} from "react"
import { Form } from "react-router-dom"
import {SignUpRestaurant} from "../../../../config/api.js"
import "./RegisterRestaurantForm.sass"
import { PiEyeBold , PiEyeClosedBold  } from "react-icons/pi";
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
        setLoginRes({...LoginRes , [nome] : Item})
        console.log(`${nome} : ${Item}`)
    }
   const [LoginRes , setLoginRes] = useState({
    username : "",
    email: "",
    password: "",
    confirm : ""
   })

    function Validation(){
        
        if(Validate.lowerChar || Validate.upperChar || Validate.numChar || Validate.specialChar){
            console.log(true)
        }else{
            console.log(false)
        }

        if(LoginRes.password == "" || LoginRes.email == "" || LoginRes.password == "" || LoginRes.confirm == ""){
            console.log("Preencha todos os campos")
        }else{
            console.log('ok login concluido')
        }
    }
    useEffect(() => {
       
        function validatePasswordLength() {
            // const passwordLength = LoginRes.password.length;
            const oitoPasswordText = document.getElementById('OitoPasswordText');

            if (LoginRes.password.length >= 8) {
                oitoPasswordText.style.color = 'green';
            } else {
                oitoPasswordText.style.color = 'red';
            }
        }
        function validatePasswordNumChar(){
            const NumPasswordText = document.getElementById('NumPasswordText');
            const Exploded = LoginRes.password.split('')
            if(Exploded.some(char => !isNaN(parseInt(char,10)))){
                NumPasswordText.style.color = 'green';

            }else{
                NumPasswordText.style.color = 'red'
            }

        }
        function validadePasswordUppercase(){
            const UpperCasePasswordText = document.getElementById('UpperCasePasswordText');
            const hasUpperCase = /[A-Z]/.test(LoginRes.password);
            if(hasUpperCase) {
                UpperCasePasswordText.style.color = 'green';
            }else{
                UpperCasePasswordText.style.color = 'red'
            }



        }
        validadePasswordUppercase()
        validatePasswordNumChar()
        validatePasswordLength();
    }, [LoginRes.password]);
    
    return(
        <div id="formRegisterRestaurant" className=" h-5/6 w-2/5 bg-white p-12 relative shadow-slate-900 shadow-lg">
            <div className="flex justify-between flex-col h-1/6">
             <h1 style={{fontFamily: 'Gilroy' , fontSize:"3rem"}}>Cadastre seu restaurante</h1>
             <CompleteBar tarefas={'3'}/>
            </div>
{/* 3 melhores imagens do seu restaurante */}
            <form action="" id="FormSingInRestaurant" className="">
                <div >
                    <label htmlFor="name">Nome do restaurante:</label>
                    <input type="text" id="name" placeholder="Nome" className="InputRestaurant "/>
                </div>
                <div>
                    <label htmlFor="email">Seu email:</label>
                    <input type="email" id='email'placeholder="exemplo@gmail.com" className="InputRestaurant" onChange={(e)=>{}}/>
                </div>
                <div className="flex align-center justify-between w-full">
                    <div className="flex flex-col ">
                        <label htmlFor="password">Sua senha:</label>
                        <input type="password" id="password" placeholder="Insira sua senha..." className="InputRestaurant" onChange={(e)=>{
                            Effect(e,'password')
                        }}/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirm">Confirme sua senha: </label>
                        <div className="flex flex-row align-center justify-center">
                            <input type="password" id="confirm" placeholder="Confirme sua senha..." className="InputRestaurant"/> 
                            <button className='text-3xl'><PiEyeBold/></button>
                        </div>
                        
                    </div>
                </div>
            </form>
            <div className="flex justify-between align-start flex-col">
                <p className="flex flex-col">
                    <span id="OitoPasswordText">Sua senha deve conter mais que 8 caracteres</span>
                    <span id="UpperCasePasswordText">Sua senha deve conter uma letra maiúscula</span>
                    <span id="NumPasswordText">Sua senha deve conter um número</span>
                </p>


                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  self-end" onClick={()=>{Validation()}}>
                    Avançar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>

            </div>

        </div>
        
    )
    
      
    
}