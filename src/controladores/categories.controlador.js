import { categoryService } from '../services/categories.services.js';

class CategoryController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await categoryService.getall();
        res.status(status).json({ message, data });
    };

    getOne = async (req, res) => {
        const { message, status, data } = await categoryService.getOne(req.params.id);
        res.status(status).json({ message, data });
    };

    create = async (req, res) => {
        const { message, status, data } = await categoryService.create(req.body);
        res.status(status).json({ message, data });
    };

    update = async (req, res) => {
        const { message, status, data } = await categoryService.update(req.params.id, req.body);
        res.status(status).json({ message, data });
    };

    delete = async (req, res) => {
        const { message, status, data } = await categoryService.delete(req.params.id);
        res.status(status).json({ message, data });
    };
}

export const categoryController = new CategoryController();