import { Router } from 'express';

const router = Router();

router.get('/hola', (req, res) => {
    return res.status(200).json({ 
        message: 'Hola mundo desde ruta' 
    });
});

export default router;