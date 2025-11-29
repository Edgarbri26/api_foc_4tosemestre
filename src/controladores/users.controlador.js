import { userService } from '../services/users.services.js';

class UserController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await userService.getall();
        res.status(status).json({ message, data });
    };

    getOne = async (req, res) => {
        const { message, status, data } = await userService.getOne(req.params.id);
        res.status(status).json({ message, data });
    };

    create = async (req, res) => {
        const { message, status, data } = await userService.create(req.body);
        res.status(status).json({ message, data });
    };

    update = async (req, res) => {
        const { message, status, data } = await userService.update(req.params.id, req.body);
        res.status(status).json({ message, data });
    };

    delete = async (req, res) => {
        const { message, status, data } = await userService.delete(req.params.id);
        res.status(status).json({ message, data });
    };
}

export const userController = new UserController();