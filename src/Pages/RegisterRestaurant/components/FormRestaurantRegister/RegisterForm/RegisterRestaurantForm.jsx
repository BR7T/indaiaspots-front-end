import { useEffect, useState } from "react";
import { PiEyeBold, PiEyeClosedBold } from "react-icons/pi";

export default function FirstForm({LoginRes,setLoginRes}) {
    
    useEffect(() => {
        function validatePasswordLength() {
            const oitoPasswordText = document.getElementById('OitoPasswordText');
            if (LoginRes.password.length >= 8) {
                setcheck(prevCheck => ({ ...prevCheck, lengthPass: true }));
                oitoPasswordText.style.color = 'green';
            } else {
                setcheck(prevCheck => ({ ...prevCheck, lengthPass: false }));
                oitoPasswordText.style.color = 'red';
            }
        }
    
        function validadePasswordUppercase() {
            const UpperCasePasswordText = document.getElementById('UpperCasePasswordText');
            const hasUpperCase = /[A-Z]/.test(LoginRes.password);
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
            const hasNumChar = /\d/.test(LoginRes.password); // Verifica se há caracteres numéricos
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
        
    }, [LoginRes.password]);




    const [See, setSee] = useState(false);
    const [DataPassword , setDataPassword] = useState(false)

    function SeePassword() {
        console.log(check.num)
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
        setLoginRes({ ...LoginRes, [nome]: Item });
        console.log(`${nome} : ${Item}`);
    }

    

    function Validation() {
        console.log(DataPassword)
        if(check.lengthPass && check.num && check.upper){
            setDataPassword(true)
        }
        if (LoginRes.password === "" || LoginRes.email === "" || LoginRes.password === "" || LoginRes.confirm === "") {
            console.log("Preencha todos os campos");
        } else if(LoginRes.password !== LoginRes.confirm){
            console.log('Senhas não estão iguais')
           
        }else if(DataPassword == false){
            console.log('Senha não é válida')
        }else{
            console.log('login concluido')
        }
    }

    const [check, setcheck] = useState({
        lengthPass : false ,
        upper : false ,
        num : false
    })
    
    return (
        <>
            <form action="" id="FormSingInRestaurant">
                <div>
                    <label htmlFor="name">Nome do restaurante: </label>
                    <input type="text" id="name" placeholder="Nome" className="InputRestaurant " onChange={(e) => {
                        Effect(e, 'username');
                    }} />
                </div>
                <div>
                    <label htmlFor="email">Seu email:</label>
                    <input type="email" id='email' placeholder="exemplo@gmail.com" className="InputRestaurant" onChange={(e) => {
                        Effect(e, 'email');
                    }} />
                </div>
                <div className="flex align-center justify-between w-full">
                    <div className="flex flex-col ">
                        <label htmlFor="password">Sua senha:</label>
                        <input type="password" id="password" placeholder="Insira sua senha..." className="InputRestaurant" onChange={(e) => {
                            Effect(e, 'password');
                        }} />
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
