import { useEffect , useState } from "react"
import { BiFontSize } from "react-icons/bi";
import { ConsultaCNPJ } from "../../../../../config/api"


export default function AddressForm({Address , setNEXT , All}){
    
    console.log(All)

    const handleConsultaCNPJ = async () => {
        const resultado = await ConsultaCNPJ(Address.CNPJ)
        console.log(resultado.estabelecimento)
        await Complete(resultado)
    };
    
    function Effect(e, nome){
        const Item =  e.target.value
        Address[nome] = Item
        //console.log(`${nome} : ${Address[nome]}`)
    }
    let ruaX;
    let BairroX
    let numX
    useEffect(()=>{
         ruaX = document.getElementById('streetInfo')
         numX = document.getElementById('numero')
         BairroX = document.getElementById('Bairro')
    },[])

    async function Complete(data){
        Address.Bairro = data.estabelecimento.bairro
        Address.Numero = data.estabelecimento.numero
        Address.Rua = data.estabelecimento.logradouro
        document.getElementById('name').value = data.razao_social
        Address.RazaoSocial = document.getElementById('name').value;
        let CNPJ = document.getElementById('CNPJ')
        console.log('a')
        ruaX.value = data.estabelecimento.logradouro
        numX.value =  data.estabelecimento.numero
        BairroX.value = data.estabelecimento.bairro
        console.log(Address)
    }
    function Validation(){
        if(ruaX.value === "" || numX == "" || BairroX === ""){
            console.log('Informações inválidas')
        }else if(Address.CNPJ.length !== 14){
            console.log(Address.CNPJ.length)
            console.log('CNPJ Inválido')
        }else{
            console.log(All)
            setNEXT(2)
            console.log('cadastro concluido')
        }
    }
    function handleRestaurantNameChange(value) {
        Address.RazaoSocial = document.getElementById('name').value;
        console.log(Address);
    }

/*     useEffect(() => {
        ;
        console.log(Address);
    },[document.getElementById('name').value]) */ 

    
    

    return(
        <>
        <form action="" id="FormSingInRestaurant" className="">
                <div >
                    <label htmlFor="name">Nome do restaurante:</label>
                    <input type="text" id="name" placeholder=''className="InputRestaurant " onChange={(e)=>{
                        Effect(e,'Nome')
                        handleRestaurantNameChange(e);
                    }}/>
                </div>
                <div className="flex flex-row">
                    <div>
                        <label htmlFor="CNPJ">Seu CNPJ:</label>
                        <input type="number" id='CNPJ'placeholder="XX.XXX.XXX/XXXX-XX" className="InputRestaurant" onChange={(e)=>{
                            
                            Effect(e,'CNPJ')
                            
                        }} maxLength='14' onKeyDown={(e)=>{
                            if(e.key === 'e'){
                                e.preventDefault()
                            }
                        }}
                        onPaste={e=>{
                            // e.preventDefault()
                            // window.alert('não é possível colar CNPJ nesse campo')
                        }}/>    
                    </div>
                    <div>
                        <label htmlFor="Bairro">Seu bairro:</label>
                        <input type="text" id="Bairro" placeholder="Bairro..." className="InputRestaurant" onChange={(e)=>{
                            Effect(e,'password')
                        }} disabled/>
                    </div>
                </div>
                <div className="flex flex-col align-center justify-between w-full">
                        <label htmlFor="confirm">Sua rua: </label>
                        <div className="flex flex-row align-center justify-center gap-2">
                            <input type="text" id="streetInfo" placeholder="Rua..." className="InputRestaurant" value='' disabled/> 
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="numero">Número do restaurante:</label>
                        <input type="number" className="InputRestaurant" id="numero" disabled/>
                    </div>
                </div>
            </form>
            <div className="flex justify-between">
                <button className="text-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-start border-2 border-red-600" style={{fontFamily: "Lufga Bold" , fontSize:"1.1rem"}} onClick={() => { 
                        if(Address.CNPJ.length !== 14){
                            window.alert('o CNPJ não é válido')
                        }else{
                            handleConsultaCNPJ()
                        }
                    }}>
                    Verificar CNPJ
                </button>


                <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-end" onClick={()=>{
                    Validation()
                }}>
                    Avançar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>
            </div>

                
                
        </>
        )
}