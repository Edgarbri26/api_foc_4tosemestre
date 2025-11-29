import { roleService } from '../services/roles.services.js';


class RoleController {

  constructor() { }

  getAll = async (req, res) => {
    const { message, status, data } = await roleService.getall();
    res.status(status).json({ message, data });
  };

  getOne = async (req, res) => {
    const { message, status, data } = await roleService.getOne(req.params.id);
    res.status(status).json({ message, data });
  };

  create = async (req, res) => {
    const { message, status, data } = await roleService.create(req.body);
    res.status(status).json({ message, data });
  };

  update = async (req, res) => {
    const { message, status, data } = await roleService.update(req.params.id, req.body);
    res.status(status).json({ message, data });
  };

  delete = async (req, res) => {
    const { message, status, data } = await roleService.delete(req.params.id);
    res.status(status).json({ message, data });
  };

}

export const roleController = new RoleController();
