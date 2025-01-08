import Api from '../service/Api.js'

export default async function register(email, password, name){
    await Api.post('/auth/register', {
        email: email,
        password: password,
        name: name
    })
}