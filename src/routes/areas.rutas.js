import { Router } from 'express';
import { areaController } from '../controladores/areas.controlador.js';
import validateArea from '../validators/areas.validator.js';

const router = Router();

router.get('/', areaController.getAll);
router.get('/:id', areaController.getOne);
router.post('/', validateArea, areaController.create);
router.put('/:id', validateArea, areaController.update);
router.delete('/:id', areaController.delete);

export default router;