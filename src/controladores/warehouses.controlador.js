import { warehouseService } from '../services/warehouses.services.js';

class WarehouseController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await warehouseService.getall();
        res.status(status).json({ message, data });
    };

    getOne = async (req, res) => {
        const { message, status, data } = await warehouseService.getOne(req.params.id);
        res.status(status).json({ message, data });
    };

    create = async (req, res) => {
        const { message, status, data } = await warehouseService.create(req.body);
        res.status(status).json({ message, data });
    };

    update = async (req, res) => {
        const { message, status, data } = await warehouseService.update(req.params.id, req.body);
        res.status(status).json({ message, data });
    };

    delete = async (req, res) => {
        const { message, status, data } = await warehouseService.delete(req.params.id);
        res.status(status).json({ message, data });
    };
}

export const warehouseController = new WarehouseController();