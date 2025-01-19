import Api from '../service/Api.js';

export default async function Photos(){
    try{

        const token = localStorage.getItem('token');
        const resul = await Api.get('/photos', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        console.log(resul);
        console.log(resul.data);
        return resul.data;
        
    }catch(error){
        if (error.resul) {
            throw new Error(error.resul.data.error);
        } else {
            throw new Error("Você não possui fotos. Faça algum upload");
        }
    }
}