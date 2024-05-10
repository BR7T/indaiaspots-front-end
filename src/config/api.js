import axios from 'axios';
const apiUrl = 'http://localhost:3100';



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
    console.log("ok")
    const res = axios.post(`${apiUrl}/user/signin`, body ,{withCredentials : true});
    console.log(body)
    return res;
}

export function signUpRequest(body) {
    
    const res = axios.post(`${apiUrl}/user/signup`, body, {withCredentials : true});
    if(res.catch(200)){
        window.location.href = '/'
        }
}

export function SignUpRestaurant(body){
    const res = axios.post(`${apiUrl}/restaurant/addRestaurant`, body, {withCredentials : true});
    console.log(res)
    return res;
}

export function getAllRestaurants(){
    
    const res = axios.get(`${apiUrl}/restaurant/getRestaurants` , {withCredentials : true});
    console.log(res)
    return res
}
export function getRestaurant(id){
    
    const res = axios.get(`${apiUrl}/restaurant/getRestaurant/${id}` , {withCredentials : true});
    console.log(res)    
    return res
}



export async function ConsultaCNPJ(cnpj) {
    console.log(cnpj)
    try {
        const res =  axios.get(`${apiUrl}/checkCNPJ/${cnpj}` , {withCredentials : true}).then(data => {
            console.log(data.data);
        });
        return res.data;
    } catch (error) {
        console.error('Erro na requisição:', error);
        throw error;
    }
}
