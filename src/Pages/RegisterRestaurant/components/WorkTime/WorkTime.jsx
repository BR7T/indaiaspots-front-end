import { FaChevronDown } from "react-icons/fa";
import {useNavigate } from "react-router-dom";
import { GiBarbecue , GiFullPizza , GiChopsticks , GiCookingPot   } from "react-icons/gi";
import { IoFastFood , IoFish , IoBeerOutline } from "react-icons/io5";
import "./worktime.sass"
import { useState } from "react";
import { addAddress, addImage, getPreSignedUrl, preSignedUrlImageUpload, SignUpRestaurant, deleteUser, registerRestaurant } from "../../../../config/api";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseleave = Swal.resumeTimer;
    }
});

export default function WorkTime({Hour , All , setNEXT}){
    const navigate = useNavigate();

    const [selectedImage, setSelectedImage] = useState({});

    const formData = new FormData();
    formData.append("image", selectedImage);

    function Effect(e, nome){
        const Item =  e.target.value
        Hour[nome] = Item
        console.log(`${nome} : ${Hour[nome]}`)
    }

    function displayError(error, page) {
        setNEXT(page)
        Toast.fire({
            icon: "error",
            title: error
        });
    }
    return(
        <>
            <form action="" id="FormSingInRestaurant" className="">
               
                <div className="flex flex-row">
                    <div>
                        <label htmlFor="Hour">Horário de funcionamento:</label>
                        <input type="time" id='Hour' className="InputRestaurant" onChange={(e)=>{
                            
                            Effect(e,'Abre')
                            
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
                            Effect(e,'Fecha')
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
                        <div className="w-3/5 h-28 bg-gray-200 flex flex-row items-center justify-between p-1 rounded-xl gap-8" style={{position:'relative'}} >
                            <div className="h-full w-1/3">
                                <div className="flex w-full h-full flex-col ">
                                    <select name="options" id="options" className="w-full h-full bg-transparent ">
                                        <option value="japonesa">Japonesa</option>
                                        <option value="Hamburgueria">Hamburgueria</option>
                                        <option value="Peixaria">Peixaria</option>
                                        <option value="Pizzaria">Pizzaria</option>
                                        <option value="Caseira">Caseira</option>
                                        <option value="Churrascaria">Churrascaria</option>
                                        <option value="Bar">Bar</option>
                                        <option value="Outros">Outros:</option>
                                    </select>
                                </div>
                                
                            </div>
                            
                            <div className="grid grid-cols-4 text-4xl gap-3">
                                <nav><GiBarbecue/></nav>
                                <nav><IoFastFood/></nav>
                                <nav><IoFish/></nav>
                                <nav><GiFullPizza/></nav>
                                <nav><GiChopsticks/></nav>
                                <nav><GiCookingPot /></nav>
                                <nav><IoBeerOutline /></nav>
                            </div>
                            
                        </div>
                        
                        
                    </div>
                </div>
                <input type="file"  name="image" onChange={(e) => {setSelectedImage(e.target.files[0])}}/>

            </form>
            <div className="flex justify-between">
                
                <button type="button" className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-large rounded-lg text-sm px-10 py-4 text-center inline-flex items-center dark:bg-red-600 dark:hover:bg-red-600 dark:focus:ring-red-800  self-end" onClick={()=>{
                    registerRestaurant(All).then(response => {
                        console.log(response);
                        if(response.data.form == 'Usuario') {
                            displayError(response.data.error,0)
                        }
                        else if(response.data.form == 'Endereco') {
                            displayError(response.data.error , 1);
                        }
                        else {
                            getPreSignedUrl().then(res => {
                                if(res.signedUrl) {
                                    preSignedUrlImageUpload(res.signedUrl, selectedImage)
                                }
                            })
                        }
                    })
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