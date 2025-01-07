import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {PrismaClient} from "@prisma/client";
import dotenv from "dotenv";

const prisma = new PrismaClient();

const SECRET_KEY = process.env.SECRET_KEY;
const EXPIRATION_TIME = '1h';

async function register(email, password, name) {
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name
      }
    });
  
    return user;
  }





async function login(email, password) {
    const user = await prisma.user.findUnique({
      where: { email }
    });
  
    if (!user) {
      throw new Error('Usuário não encontrado!');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password);
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
  
export { register, login, verifyToken };