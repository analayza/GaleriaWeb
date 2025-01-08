import express from 'express';
import { PrismaClient } from '@prisma/client';
import {register, login} from './auth/authService.js';
import cors from 'cors';

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173/',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.post('/auth/register', async (req, res) => {
    try{
        const {email, password, name} = req.body;
        const user = await register(email, password, name);
        res.status(201).json({message: 'Usuário criado com sucesso', user});
    }catch(error){
        res.status(400).json({error: error.message});
    }
});


app.post('/auth/login', async (req, res) => {
    try{
        const {email, password} = req.body;
        const {token, user} = await login(email, password);
        res.status(201).json({token, user});
    }catch(error){
        res.status(400).json({error: error.message});
    }
});




app.listen(3000)