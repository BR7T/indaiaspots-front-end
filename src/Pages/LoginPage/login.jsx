import { Link , useNavigate, Outlet } from "react-router-dom"
import FormLogin from "./components/Form/FormLogin"
import {app , auth} from "../../firebase";
import { GoogleAuthProvider, signInWithPopup,getAdditionalUserInfo } from "firebase/auth";
import { IoLogoGoogle  } from "react-icons/io";
import GoogleSignInRequest from "../../config/api";


import "./login.sass"

import Images from "../../../public/Image/images";
import FooterLogin from "./components/Footer/footerLogin";
import Header from "../HomePage/components/Header/header";
import TextAside from "./components/TextAside/TextAside";




export default function Login(){

   const Navigate = useNavigate()

    return(
        <>
            <div id="LoginPage">

                <main id="mainLogin" className="w-2/6 h-2/3 rounded-xl  ">
                    
                    <div id="LoginArea" className=" justify-center h-full" >
                        
                        <div id="title">  
                            <h1 className="text-5xl text-start">Login</h1>
                        </div>
                        
                        <FormLogin/>
                        <p>Ou</p>
                        <div id="alterLogin" onClick={()=>{
                            const provider = new GoogleAuthProvider();
                            signInWithPopup(auth,provider).then(result => {
                                let credential = GoogleAuthProvider.credentialFromResult(result);
                                let token = credential.accessToken;
                                let userInfo = result.user;
                                const isNewUser = getAdditionalUserInfo(result).isNewUser;
                                const userEmail = userInfo.email;
                                const username = userInfo.displayName;
                                GoogleSignInRequest(token,userEmail,username,isNewUser)
                            })
                        }}>
                            <button

                            ><IoLogoGoogle/> Continuar com o Google</button>
                        </div>
                    </div>
                    

                </main>
                <aside id="TextAsideArea">
                    <TextAside/>
                </aside>

            </div>
            
            <FooterLogin/>

            
        </>
    )
}