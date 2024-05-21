import axios from 'axios';
import { getAppCheckToken } from './firebase';

const apiUrl = 'https://southamerica-east1-indaiaspots.cloudfunctions.net/app';
//const apiUrl = 'http://127.0.0.1:5001/indaiaspots/southamerica-east1/app';


export async function GoogleSignInRequest(body) {
    const token = await getAppCheckToken();
    const res = axios.post(`${apiUrl}/user/googleSignIn`, body, {withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});
    return res;
}

export async function signInRequest(body) {
    const token = await getAppCheckToken();
    const res = axios.post(`${apiUrl}/user/signin`, body ,{withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});
    return res;
}

export async function signUpRequest(body) {
    const res = axios.post(`${apiUrl}/user/signup`, body, {withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});
    return res;
}

export async function SignUpRestaurant(body){
    const token = await getAppCheckToken();
    const res = axios.post(`${apiUrl}/restaurant/addRestaurant`, body, {withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});
    console.log(res)
    return res;
}

export async function getAllRestaurants(){
    const token = await getAppCheckToken();
    const res = axios.get(`${apiUrl}/restaurant/getRestaurants` , {withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});
    return res;
}

export async function getRestaurant(id){
    const token = await getAppCheckToken();
    const res = axios.get(`${apiUrl}/restaurant/getRestaurant/${id}` , {withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});
    console.log(res)    
    return res
}

export async function ConsultaCNPJ(cnpj) {
    const res = await axios.get(`https://publica.cnpj.ws/cnpj/${cnpj}`);
    return res.data;
}

export async function checkToken() {
    const token = await getAppCheckToken();
    const res = await axios.get(`${apiUrl}/checkToken` , {withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});   
    return res.data.isValid;
}

export async function logout() {
    const token = await getAppCheckToken();
    const res = await axios.get(`${apiUrl}/logout` , {withCredentials : true, headers: {'Content-Type': 'application/json','X-Firebase-AppCheck': token}});   
    return res.data;
}
