import { Router } from 'express';
import * as Controller from '../controladores/areas.controlador.js';
import { validateArea } from '../validators/areas.validator.js';

const router = Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', validateArea, Controller.create);
router.put('/:id', validateArea, Controller.update);
router.delete('/:id', Controller.remove);

export default router;