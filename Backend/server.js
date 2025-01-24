import express from 'express';
import { PrismaClient } from '@prisma/client';
import {register, login} from './auth/authService.js';
import {upload} from './multerConfig/multerConfig.js';
import cors from 'cors';
import authMiddleware from './auth/authMiddleware.js'; // add o import 

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


app.post('/photos/upload', authMiddleware, upload.single("photo"), async (req, res) => { 
    try {
        const {userId} = req.user; 
    
        if (!req.file) {
          return res.status(400).json({ message: "Nenhum arquivo foi enviado!" });
        }
    
        const fileBuffer = req.file.buffer;
    
        const base64Data = fileBuffer.toString("base64");
    
        const fileUrl = `data:${req.file.mimetype};base64,${base64Data}`;
    
        const photo = await prisma.photo.create({
          data: {
            userId: userId,
            url: fileUrl,
          },
        });
    
        res.status(201).json({ message: "Foto enviada com sucesso!", photo }); 
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao fazer upload da foto." });
      }
});


app.get('/photos', authMiddleware, async(req, res) => {
  try{
    const {userId} = req.user;
    const photos = await prisma.photo.findMany({
      where: {userId}
    });

    if(!photos.length){
      return res.status(400).json({message: "Você ainda não possui fotos. Faça algum upload."})
    }

    return res.status(200).json({photos})
  }catch(error){
    console.error(error);
    return res.status(500).json({ message: "Erro ao buscar fotos." });
  }
});

app.delete('/photos', authMiddleware, async(req, res) => {
  try{
    const {id} = req.body;
    await prisma.photo.delete({
      where: {id}
    });
    return res.status(200).json({menssage: "Foto deletada!"})
  }catch(error){
    console.error(error);
    return res.status(500).json({ message: "Erro ao deletar foto." });
  }
});

app.put('/updatename', authMiddleware, async(req, res) =>{
  try{
    const {userId} = req.user;
    const {newName} = req.body;
    await prisma.user.update({
      data: {
        name: newName,
      },
      where: {id: userId}
    });
    
    return res.status(200).json({menssage: "Nome Atualizado!"})
  }catch(error){
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar nome." });
  }
});

app.put('/updateemail', authMiddleware, async(req, res) =>{
  try{
    const {userId} = req.user;
    const {newEmail} = req.body;
    await prisma.user.update({
      data:{
        email: newEmail,
      },
      where: {id: userId}
    });
    return res.status(200).json({message: "Email Atualizado!"})
  }catch(error){
    console.error(error);
    return res.status(500).json({ message: "Erro ao atualizar email." });
  }
});

app.listen(3000)