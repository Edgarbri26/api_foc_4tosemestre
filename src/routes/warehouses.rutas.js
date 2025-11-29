import { Router } from 'express';
import * as Controller from '../controladores/warehouses.controlador.js';
import { validateWarehouse } from '../validators/warehouses.validator.js';

const router = Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', validateWarehouse, Controller.create);
router.put('/:id', validateWarehouse, Controller.update);
router.delete('/:id', Controller.remove);

export default router;