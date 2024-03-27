export default function GoogleSignInRequest(accessToken , email , username,isNewUser) {
    fetch('http://localhost:3100/user/googleSignIn', {   
        method : 'POST',
        body : JSON.stringify({token : accessToken, email : email, username : username, isNewUser : isNewUser}),
        mode: 'cors',
        cache: 'default',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(response => response.json())
    .then(response => {
    })

    
}