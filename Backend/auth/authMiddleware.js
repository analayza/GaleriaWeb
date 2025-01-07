import {verifyToken} from "./authService.js"

function authMiddleware(req, res, next){
    const token = req.header('Authorization')?.replace('Bearer', '');

    if(!token){
        return res.status(401).json({error: "Token não fornecido!"});
    }

    try{
        const decoded = verifyToken(token);
        req.user = decoded;
        next();
    }catch(error){
        res.status(401).json({error: "Token inválido!"});
    }

}

module.exports = authMiddleware;