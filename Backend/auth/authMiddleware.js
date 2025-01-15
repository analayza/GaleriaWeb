import {verifyToken} from "./authService.js"

function authMiddleware(req, res, next){
    const token = req.header('Authorization')?.replace('Bearer', '').trim(); //trim

    if(!token){
        return res.status(401).json({error: "Token não fornecido!"});
    }

    try{
        const decoded = verifyToken(token);
        req.user = decoded;
        console.log('User decoded:', req.user);
        next();
    }catch(error){
        res.status(401).json({error: "Token inválido!"});
    }

}

export default authMiddleware; //add