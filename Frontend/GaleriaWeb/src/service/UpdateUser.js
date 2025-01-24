import Api from '../service/Api.js';

async function UpdateName(newName) {
    try {
        const token = localStorage.getItem('token');
        console.log("Token recuperado:", token);

        const nameRegex = /^[A-Za-z\s]+$/;

        if (!newName || newName.length < 3 || newName.length > 50 || !nameRegex.test(newName)) {
            throw new Error('Nome inválido!');
        }
        
        const response = await Api.put('/updatename',
            {
                newName: newName, 
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error("Erro no servidor. Tente novamente mais tarde.");
        }
    }
};

async function UpdateEmail(newEmail) {
    try{    
        const token = localStorage.getItem('token');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!newEmail || !emailRegex.test(newEmail)) {
            throw new Error('Email inválido!');
        }

        const response = await Api.put('/updateemail',
            {
                newEmail: newEmail, 
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    }catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error("Erro no servidor. Tente novamente mais tarde.");
        }
    }
};

async function UpdatePassword(params) {
    
}

export{UpdateName, UpdateEmail, UpdatePassword}