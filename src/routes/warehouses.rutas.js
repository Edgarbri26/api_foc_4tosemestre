import { Router } from 'express';
import { warehouseController } from '../controladores/warehouses.controlador.js';
import validateWarehouse from '../validators/warehouses.validator.js';

const router = Router();

router.get('/', warehouseController.getAll);
router.get('/:id', warehouseController.getOne);
router.post('/', validateWarehouse, warehouseController.create);
router.put('/:id', validateWarehouse, warehouseController.update);
router.delete('/:id', warehouseController.delete);

export default router;