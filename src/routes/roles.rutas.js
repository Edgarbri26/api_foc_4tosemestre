import { Router } from 'express';
import * as Controller from '../controladores/roles.controlador.js';
import { validateRole } from '../validators/roles.validator.js';

const router = Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', validateRole, Controller.create);
router.put('/:id', validateRole, Controller.update);
router.delete('/:id', Controller.remove);

export default router;