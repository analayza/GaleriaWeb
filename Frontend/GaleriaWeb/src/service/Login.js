import Api from '../service/Api.js';

export default async function Login(email, password){
    try {
        const response = await Api.post('/auth/login', {
            email: email,
            password: password,
        });

        const {token} = response.data; 
        localStorage.setItem('token', token); 

        return response.data; 
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error("Erro no servidor. Tente novamente mais tarde.");
        }
    }
}