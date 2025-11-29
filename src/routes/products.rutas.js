import { Router } from 'express';
import * as Controller from '../controladores/products.controlador.js';
import { validateProduct } from '../validators/products.validator.js';

const router = Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', validateProduct, Controller.create);
router.put('/:id', validateProduct, Controller.update);
router.delete('/:id', Controller.remove);

export default router;