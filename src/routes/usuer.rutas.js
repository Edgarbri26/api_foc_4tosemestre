import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).json({ 
        message: 'Todos los usuarios' 
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ 
        message: `Usuario encontrado` ,
        id
    });
});

export default router;