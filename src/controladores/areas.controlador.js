import { areaService } from '../services/areas.services.js';

class AreaController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await areaService.getall();
        res.status(status).json({ message, data });
    };

    getOne = async (req, res) => {
        const { message, status, data } = await areaService.getOne(req.params.id);
        res.status(status).json({ message, data });
    };

    create = async (req, res) => {
        const { message, status, data } = await areaService.create(req.body);
        res.status(status).json({ message, data });
    };

    update = async (req, res) => {
        const { message, status, data } = await areaService.update(req.params.id, req.body);
        res.status(status).json({ message, data });
    };

    delete = async (req, res) => {
        const { message, status, data } = await areaService.delete(req.params.id);
        res.status(status).json({ message, data });
    };
}

export const areaController = new AreaController();