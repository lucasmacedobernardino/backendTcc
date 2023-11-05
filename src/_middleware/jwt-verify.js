import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Token invalid' });
        }
        
        // Anexar userId ao objeto req
        req.userId = decoded.id;
        
        return next(); // continue para o próximo middleware ou rota
    });
}

export default authMiddleware;