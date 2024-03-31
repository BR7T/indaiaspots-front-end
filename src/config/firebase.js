import { GoogleAuthProvider, signInWithPopup,getAdditionalUserInfo, createUserWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import { GoogleSignInRequest } from "./api";

const firebaseConfig = {
    apiKey: "AIzaSyAGUvffFLk-YZqJKpEhx2CIvF6YKsbJs4I",
    authDomain: "indaiaspots.firebaseapp.com",
    projectId: "indaiaspots",
    storageBucket: "indaiaspots.appspot.com",
    messagingSenderId: "1039724625697",
    appId: "1:1039724625697:web:ab1c43158eecce5b700860",
    measurementId: "G-J88X10QKDT"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function signInWithGoogle() {
    signInWithPopup(auth,provider).then(result => {
        let credential = GoogleAuthProvider.credentialFromResult(result);
        let token = credential.accessToken;
        let userInfo = result.user;
        const isNewUser = getAdditionalUserInfo(result).isNewUser;
        const userEmail = userInfo.email;
        const username = userInfo.displayName;
        const body = {token : token, email : userEmail, username : username, isNewUser : isNewUser};
        GoogleSignInRequest(body).then(res => {
            if(res.data.Accepted) {
                window.location.href = "/";
            }
        })
    })
}

export async function signupEmailVerification(data) {
    const userCredentials = await createUserWithEmailAndPassword(auth,data.email,data.password);
    sendEmailVerification(userCredentials.user);
}