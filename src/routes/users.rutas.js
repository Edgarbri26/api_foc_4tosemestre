import { Router } from 'express';
import { userController } from '../controladores/users.controlador.js';
import validateUser from '../validators/users.validator.js';

const router = Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getOne);
router.post('/', validateUser, userController.create);
router.put('/:id', validateUser, userController.update);
router.delete('/:id', userController.delete);

export default router;