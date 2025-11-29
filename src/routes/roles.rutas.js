import { Router } from 'express';
import { roleController } from '../controladores/roles.controlador.js';
import validateRole from '../validators/roles.validator.js';

const router = Router();

//get all
router.get('/', roleController.getAll);
//http://localhost:3800/api/roles

//create 
router.post('/', validateRole, roleController.create);
//http://localhost:3800/api/roles

//update 
router.put('/:id', validateRole, roleController.update);
//http://localhost:3800/api/roles/:id

//delete
router.delete('/:id', roleController.delete);
//http://localhost:3800/api/roles/:id
export default router;