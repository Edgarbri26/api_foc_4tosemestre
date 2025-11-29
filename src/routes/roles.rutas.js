import { Router } from 'express';
import { RoleController } from '../controladores/roles.controlador.js';

const router = Router();
const rolController =  new RoleController();

router.get('/', rolController.getAll);

router.get('/:id', rolController.getOne);

router.put('/:id', rolController.updated);

router.delete('/:id', rolController.deleted);

router.post('/', rolController.created);

export default router;