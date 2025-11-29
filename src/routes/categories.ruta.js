import { Router } from 'express';
import { categoryController } from '../controladores/categories.controlador.js';
import validateCategory from '../validators/categories.validator.js';

const router = Router();

router.get('/', categoryController.getAll);
router.get('/:id', categoryController.getOne);
router.post('/', validateCategory, categoryController.create);
router.put('/:id', validateCategory, categoryController.update);
router.delete('/:id', categoryController.delete);

export default router;