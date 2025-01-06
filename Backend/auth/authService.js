import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

const SECRET_KEY = env("SECRET_KEY");
const EXPIRATION_TIME = '1h';

async function register(email, senha, nome) {
    const hashedPassword = await bcrypt.hash(senha, 10);
  
    const user = await prisma.user.create({
      data: {
        email,
        senha: hashedPassword,
        nome
      }
    });
  
    return user;
  }





async function login(email, senha) {
    const user = await prisma.user.findUnique({
      where: { email }
    });
  
    if (!user) {
      throw new Error('Usuário não encontrado!');
    }
  
    const isPasswordValid = await bcrypt.compare(senha, user.senha);
    if (!isPasswordValid) {
      throw new Error('Senha inválida!');
    }
  
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: EXPIRATION_TIME });
  
    return { token, user };
  }




function verifyToken(token) {
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      return decoded;
    } catch (err) {
      throw new Error('Token inválido!');
    }
  }
  
  module.exports = { register, login, verifyToken };