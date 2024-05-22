import { GoogleAuthProvider, signInWithPopup,getAdditionalUserInfo, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword} from "firebase/auth";
import {initializeApp} from "firebase/app";
import  { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import {getAuth} from "firebase/auth"
import { GoogleSignInRequest } from "./api";
import {getToken} from 'firebase/app-check';

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

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider('6LflpeApAAAAAIHrVc95dkdE6x0Gh6JbL2tmYWwk'),
    isTokenAutoRefreshEnabled: true
});

export async function getAppCheckToken() {
    try {
      const appCheckTokenResponse = await getToken(appCheck);
      return appCheckTokenResponse.token;
    } catch (error) {
      console.error('Error fetching AppCheck token:', error);
      throw error;
    }
}

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
            setTimeout(() => {
                if(res.data.Accepted) {
                    window.location.href = "/";
                }
            },1000);
        })
    })
}

export async function signupEmailVerification(data) {
    const userCredentials = await createUserWithEmailAndPassword(auth,data.email,data.confirmPassword);
    sendEmailVerification(userCredentials.user);
}

export async function isEmailVerified(data) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
        const user = userCredential.user;
        if(user.emailVerified) {
            return true
        } 
        return false;
    } catch(error) {
        return false;
    }
}