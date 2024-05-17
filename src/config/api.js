import axios from 'axios';
// const apiUrl = 'https://us-central1-indaiaspots.cloudfunctions.net/app';
const apiUrl = 'http://127.0.0.1:5001/indaiaspots/us-central1/app';


export function get(url) {
    const response = axios.get(url);
    return response;
}

export async function post(url,body) {
    const response = await axios.post(url, body);
    return response;
}

export function GoogleSignInRequest(body) {
    const res = axios.post(`${apiUrl}/user/googleSignIn`, body, {withCredentials : true});
    return res;
}

export function signInRequest(body) {
    const res = axios.post(`${apiUrl}/user/signin`, body ,{withCredentials : true});
    return res;
}

export function signUpRequest(body) {
    const res = axios.post(`${apiUrl}/user/signup`, body, {withCredentials : true});
    return res;
}

export function SignUpRestaurant(body){
    const res = axios.post(`${apiUrl}/restaurant/addRestaurant`, body, {withCredentials : true});
    console.log(res)
    return res;
}

export function getAllRestaurants(){
    const res = axios.get(`${apiUrl}/restaurant/getRestaurants` , {withCredentials : true});
    return res
}

export function getRestaurant(id){
    const res = axios.get(`${apiUrl}/restaurant/getRestaurant/${id}` , {withCredentials : true});
    console.log(res)    
    return res
}

export async function ConsultaCNPJ(cnpj) {
    const res = await axios.get(`https://publica.cnpj.ws/cnpj/${cnpj}`);
    return res.data;
}

export async function checkToken() {
    const res = axios.get(`${apiUrl}/checkToken` , {withCredentials : true});   
    return res.data.isValid;
}
