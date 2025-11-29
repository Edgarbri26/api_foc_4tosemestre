import * as Service from '../services/categories.services.js';

export const getAll = async (req, res) => {
    const { status, message, data } = await Service.getAll();
    res.status(status).json({ message, data });
};

export const getById = async (req, res) => {
    const { status, message, data } = await Service.getById(req.params.id);
    res.status(status).json({ message, data });
};

export const create = async (req, res) => {
    const { status, message, data } = await Service.create(req.body);
    res.status(status).json({ message, data });
};

export const update = async (req, res) => {
    const { status, message, data } = await Service.update(req.params.id, req.body);
    res.status(status).json({ message, data });
};

export const remove = async (req, res) => {
    const { status, message, data } = await Service.remove(req.params.id);
    res.status(status).json({ message, data });
};