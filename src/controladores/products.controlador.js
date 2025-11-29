import { productService } from '../services/products.services.js';

class ProductController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await productService.getall();
        res.status(status).json({ message, data });
    };

    getOne = async (req, res) => {
        const { message, status, data } = await productService.getOne(req.params.id);
        res.status(status).json({ message, data });
    };

    create = async (req, res) => {
        const { message, status, data } = await productService.create(req.body);
        res.status(status).json({ message, data });
    };

    update = async (req, res) => {
        const { message, status, data } = await productService.update(req.params.id, req.body);
        res.status(status).json({ message, data });
    };

    delete = async (req, res) => {
        const { message, status, data } = await productService.delete(req.params.id);
        res.status(status).json({ message, data });
    };
}

export const productController = new ProductController();