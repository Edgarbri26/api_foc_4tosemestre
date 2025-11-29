import { Router } from 'express';
import { productController } from '../controladores/products.controlador.js';
import validateProduct from '../validators/products.validator.js';

const router = Router();

router.get('/', productController.getAll);
router.get('/:id', productController.getOne);
router.post('/', validateProduct, productController.create);
router.put('/:id', validateProduct, productController.update);
router.delete('/:id', productController.delete);

export default router;