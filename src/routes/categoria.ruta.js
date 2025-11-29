import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).json({ 
        message: 'Todas las categorias del sistema' 
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ 
        message: `Categoria encontrada` ,
        id
    });
});

export default router;