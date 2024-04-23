import React, { useState } from 'react';
import './Register.sass';
import { useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2'

import { BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import TextAside from '../LoginPage/components/TextAside/TextAside';
import { signInRequest, signUpRequest } from '../../config/api';
import { signupEmailVerification } from '../../config/firebase';




const RegisterPage = () => {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });


  let errorText = document.getElementById('Error')
  function Verificacao(){
    if(formData.confirmPassword != formData.password ){
      errorText.innerHTML = "Senhas não são iguais"
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="register-page">
      
      <form onSubmit={handleSubmit}>
        <h1 id='titleForm'>Registre-se</h1>
        <label htmlFor="name">Nome <BiUser className="inputIcons"/></label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder='Insira seu nome'
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email <MdOutlineEmail className="inputIcons"/></label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Insira seu Email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Senha<MdPassword className="inputIcons"/></label>
        <input
          type="password"
          id="password"
          placeholder='Insira sua senha'
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirm-password">Confirme<MdPassword className="inputIcons"/></label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          placeholder='Confirme a senha'
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <p className='text-red-500' id='Error'></p>

      
      <div className="containerBotao wise">
          <button id="btnGoBack" className="cancel botao" type="button" onClick={()=>{navigate("/")}}>Voltar</button>
          
          <button id="submit" className="textcolor botao" type="submit" onClick={(e)=>{
            Verificacao()
            signUpRequest(formData);
            signupEmailVerification(formData);
          }}>
            Avançar
          </button>
        
        </div>
      
      </form>
    
      <TextAside/>
    </div>
  );
 
  
};

export default RegisterPage;