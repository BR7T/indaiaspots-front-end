import { useEffect, useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function FirstForm({LoginComp, NEXT ,setNEXT , All}) {
    const [check, setcheck] = useState({
        lengthPass : false ,
        upper : false ,
        num : false
    })

    console.log(All)
    const [controll, setcontroll] = useState('')
    
    useEffect(() => {
        function validatePasswordLength() {
            const oitoPasswordText = document.getElementById('OitoPasswordText');
            
            if (LoginComp.password.length >= 8) {

                setcheck(prevCheck => ({ ...prevCheck, lengthPass: true }));
                oitoPasswordText.style.color = 'green';
            } else {
                setcheck(prevCheck => ({ ...prevCheck, lengthPass: false }));
                oitoPasswordText.style.color = 'red';
            }
        }
    
        function validadePasswordUppercase() {
            const UpperCasePasswordText = document.getElementById('UpperCasePasswordText');
            const hasUpperCase = /[A-Z]/.test(LoginComp.password);
            if (hasUpperCase) {
                setcheck(prevCheck => ({ ...prevCheck, upper: true }));
                UpperCasePasswordText.style.color = 'green';
            } else {
                setcheck(prevCheck => ({ ...prevCheck, upper: false }));
                UpperCasePasswordText.style.color = 'red';
            }
        }
    
        function validatePasswordNumChar() {
            const NumPasswordText = document.getElementById('NumPasswordText');
            const hasNumChar = /\d/.test(LoginComp.password);
            if (hasNumChar) {
                setcheck(prevCheck => ({ ...prevCheck, num: true }));
                NumPasswordText.style.color = 'green';
            } else {
                setcheck(prevCheck => ({ ...prevCheck, num: false }));
                NumPasswordText.style.color = 'red';
            }
        }
    
        validadePasswordUppercase();
        validatePasswordNumChar();
        validatePasswordLength();
        
    },[controll]);
    

    useEffect(()=>{
        console.table(check)
        if(check.lengthPass && check.num && check.upper){
            setDataPassword(true)
        }    
    },[check])

    const [See, setSee] = useState(false);
    const [DataPassword , setDataPassword] = useState(false)

    function SeePassword() {
        const buttonEye = document.getElementById('eyePassword');
        const confirm = document.getElementById('confirm');
        const password = document.getElementById('password');
        buttonEye.classList.toggle('see');
        setSee(!See);
        if (buttonEye.classList.contains('see')) {
            confirm.type = 'text';
            password.type = 'text';
        } else {
            confirm.type = 'password';
            password.type = 'password';
        }
    }
    
    

    function Effect(e, nome) {
        const Item = e.target.value;
        LoginComp[nome] = Item
        
    }
   

    function Validation() {
        
        
        if (LoginComp.password === "" || LoginComp.email === "" || LoginComp.password === "" || LoginComp.confirm === "") {
            console.log("Preencha todos os campos");
        } else if(LoginComp.password !== LoginComp.confirm){
            console.log('Senhas não estão iguais')
           
        }else if(DataPassword == false){
            console.log('Senha não é válida')
        }else{
            setNEXT(1)
            console.log('login concluido')
            
            
        }
    }   

    
    return (
        <>
            <form action="" id="FormSingInRestaurant">
                <div>
                    <label htmlFor="name">Nome do restaurante: </label>
                    <input type="text" id="name" placeholder="Nome" className="InputRestaurant " onChange={(e) => {
                        Effect(e, 'username');
                    }} required />
                </div>
                <div>
                    <label htmlFor="email">Seu email:</label>
                    <input type="email" id='email' placeholder="exemplo@gmail.com" className="InputRestaurant" onChange={(e) => {
                        Effect(e, 'email');
                    }} required/>
                </div>
                <div className="flex align-center justify-between w-full">
                    <div className="flex flex-col ">
                        <label htmlFor="password">Sua senha:</label>
                        <input type="password" id="password" placeholder="Insira sua senha..." className="InputRestaurant" onChange={(e) => {
                            Effect(e, 'password');
                            setcontroll(e.target.value)
                        }} required/>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="confirm">Confirme sua senha: </label>
                        <div className="flex flex-row align-center justify-center gap-2">
                            <input type="password" id="confirm" placeholder="Confirme sua senha..." className="InputRestaurant" onChange={(e)=>{
                                Effect(e, 'confirm');
                            }}/>
                            <button id='eyePassword' className='text-3xl border-2 border-gray-200 rounded-lg' onClick={(e) => {
                                e.preventDefault();
                                SeePassword();
                            }}>
                                {See ? <PiEyeClosedBold /> : <PiEyeBold />}
                            </button>
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
                <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-end" onClick={() => { Validation() }}>
                    Avançar
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>          
                </button>
            </div>

                            
        </>
    );
}
