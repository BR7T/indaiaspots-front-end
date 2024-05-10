import { useEffect , useState } from "react"
import { ConsultaCNPJ } from "../../../../../config/api"


export default function AddressForm({Address}){
    
    
    const [infoCNPJ, setInfoCNPJ] = useState(); // Inicializa o estado com null, pois ainda não temos informações

    const handleConsultaCNPJ = async () => {
        try {
            const resultado = await ConsultaCNPJ(Address.CNPJ);
            if (resultado.error) {
                console.error('Erro ao consultar CNPJ:', resultado.error);
            } else {
                setInfoCNPJ(resultado); // Armazena as informações retornadas no estado
                console.log(resultado); // Ou faça o que precisar com as informações aqui
            }
        } catch (error) {
            console.error('Erro ao consultar CNPJ:', error);
        }
    };
    
    function Effect(e, nome){
        
        const Item =  e.target.value
        Address[nome] = Item
        console.log(`${nome} : ${Address[nome]}`)
    }
    
    async function Complete(data){
        let rua = document.getElementById('streetInfo')
        console.log(data)
    }
    

    return(
        <>
        <form action="" id="FormSingInRestaurant" className="">
                <div >
                    <label htmlFor="name">Nome do restaurante:</label>
                    <input type="text" id="name" placeholder=''className="InputRestaurant " onChange={(e)=>{
                        Effect(e,'username')
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
                            e.preventDefault()
                            window.alert('não é possível colar CNPJ nesse campo')
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
                        <input type="number" className="InputRestaurant" id="numero" onKeyDown={(e)=>{
                            if(e.key === 'e'){
                                e.preventDefault()
                            }
                        }}
                        onChange={(e)=>{
                            Effect(e,'num')
                        }} disabled/>
                    </div>
                </div>
            </form>
           


                <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-end" onClick={() => { 
                        handleConsultaCNPJ()
                    }}>
                    Avançar
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                </button>

                
                
        </>
        )
}