import Api from '../service/Api.js';

export default async function PhotosUpload (userId, photo){
    try {
        const response = await Api.post('/photos/upload', {
            userId: userId,
            photo: photo,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data; 
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error("Erro no servidor. Tente novamente mais tarde.");
        }
    }
}