import Api from '../service/Api.js';

export default async function PhotosUpload (formData){
    try {
        const response = await Api.post('/photos/upload', formData);

        return response.data; 
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error("Erro no servidor. Tente novamente mais tarde.");
        }
    }
}