import { FaChevronDown } from "react-icons/fa";

  

export default function WorkTime({Hour}){


    return(
        <>
            <form action="" id="FormSingInRestaurant" className="">
               
                <div className="flex flex-row">
                    <div>
                        <label htmlFor="CNPJ">Horário de funcionamento:</label>
                        <input type="time" id='Hour' className="InputRestaurant" onChange={(e)=>{
                            
                            Effect(e,'CNPJ')
                            
                        }} maxLength='14' onKeyDown={(e)=>{
                            if(e.key === 'e'){
                                e.preventDefault()
                            }
                        }}
                        onPaste={e=>{
                            e.preventDefault()
                            window.alert('Não é possível colar CNPJ nesse campo')
                        }}/>    
                    </div>
                    <div>
                        <label htmlFor="Bairro">Até as...</label>
                        <input type="Time" id="Bairro" placeholder="Bairro..." className="InputRestaurant" onChange={(e)=>{
                            Effect(e,'password')
                        }} />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 align-center justify-between w-full">

                         <div className="flex flex-row-reverse align-center justify-between">
                            <input type="checkbox" name="dom" id="Domingo" />
                            <label htmlFor="Domingo" style={{userSelect:'none'}}>Domingo</label>
                        </div>
                        <div className="flex flex-row-reverse align-center justify-between">
                            <input type="checkbox" name="qui" id="Quinta" />
                            <label htmlFor="Quinta" style={{userSelect:'none'}}>Quinta-Feira</label>
                        </div>
                        <div className="flex flex-row-reverse align-center justify-between">
                            <input type="checkbox" name="seg" id="Segunda" />
                            <label htmlFor="Segunda" style={{userSelect:'none'}}>Segunda-Feira</label>
                        </div>
                        <div className="flex flex-row-reverse align-center justify-between">
                            <input type="checkbox" name="sex" id="Sexta" />
                            <label htmlFor="Sexta" style={{userSelect:'none'}}>Sexta-Feira</label>
                        </div>
                        
                        <div className="flex flex-row-reverse align-center justify-between">
                            <input type="checkbox" name="ter" id="Terca" />
                            <label htmlFor="Terca" style={{userSelect:'none'}}>Terça-Feira</label>
                        </div>
                        <div className="flex flex-row-reverse align-center justify-between">
                            <input type="checkbox" name="sab" id="Sábado" />
                            <label htmlFor="Sábado" style={{userSelect:'none'}}>Sábado</label>
                        </div>
                        <div className="flex flex-row-reverse align-center justify-between">
                            <input type="checkbox" name="qua" id="Quarta" />
                            <label htmlFor="Quarta" style={{userSelect:'none'}}>Quarta-Feira</label>
                        </div>
                        
                        
                </div>
                <div>
                    <div className="flex flex-col">
                        <label htmlFor="numero">Escolha um Ícone e o tipo de restaurante:</label>
                        <div className="h-10 w-4/5 bg-gray-200 flex flex-row items-center justify-between p-1" style={{position:'relative'}} >
                            <div className="h-full w-1/2 ">
                                <div className="flex w-full h-full flex-col gap-6">
                                    <select name="options" id="options" className="w-full h-full">
                                        <option value="japonesa">Japonesa</option>
                                        <option value="Hamburgueria">Hamburgueria</option>
                                        <option value="Peixaria">Peixaria</option>
                                        <option value="Pizzaria">Pizzaria</option>
                                        <option value="Caseira">Caseira</option>
                                        <option value="Pastelaria">Pastelaria</option>
                                        <option value="Churrascaria">Churrascaria</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
            </form>
            <div className="flex justify-between">
                


                <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-end" onClick={()=>{
                    
                    
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