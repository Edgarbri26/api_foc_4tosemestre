import { Router } from 'express';
import * as Controller from '../controladores/users.controlador.js';
import { validateUser } from '../validators/users.validator.js';

const router = Router();

router.get('/', Controller.getAll);
router.get('/:id', Controller.getById);
router.post('/', validateUser, Controller.create);
router.put('/:id', validateUser, Controller.update);
router.delete('/:id', Controller.remove);

export default router;