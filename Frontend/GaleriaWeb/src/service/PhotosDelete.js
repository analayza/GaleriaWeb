import Api from '../service/Api.js';

export default async function PhotoDelete(id) {
    try {
        const token = localStorage.getItem('token');
        const response = await Api.delete('/photos',{
            headers: {
                Authorization: `Bearer ${token}`,
            },
            data: { 
                id: id,
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
};