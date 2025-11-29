import { Router } from 'express';
import * as Controller from '../controladores/categories.controlador.js';
import { validateCategory } from '../validators/categories.validator.js';

const router = Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', validateCategory, Controller.create);
router.put('/:id', validateCategory, Controller.update);
router.delete('/:id', Controller.remove);

export default router;