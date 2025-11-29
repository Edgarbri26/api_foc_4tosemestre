import prisma from '../config/prisma.config.js';

export class WarehouseService {
    constructor() { }

    getall = async () => {
        try {
            const data = await prisma.warehouses.findMany({ where: { status: true } });
            return { message: 'Listado', status: 200, data };
        } catch (e) {
            return { message: e.message, status: 500, data: null };
        }
    };

    getOne = async (id) => {
        try {
            const data = await prisma.warehouses.findUnique({ where: { id: parseInt(id) } });
            if (!data || !data.status) return { message: 'No existe', status: 404, data: null };
            return { message: 'Encontrado', status: 200, data };
        } catch (e) {
            return { message: e.message, status: 500, data: null };
        }
    };

    create = async (body) => {
        try {
            const data = await prisma.warehouses.create({ data: body });
            return { message: 'Creado', status: 201, data };
        } catch (e) {
            return { message: e.message, status: 500, data: null };
        }
    };

    update = async (id, body) => {
        try {
            const data = await prisma.warehouses.update({ where: { id: parseInt(id) }, data: body });
            return { message: 'Actualizado', status: 200, data };
        } catch (e) {
            return { message: e.message, status: 500, data: null };
        }
    };

    delete = async (id) => {
        try {
            const data = await prisma.warehouses.update({ where: { id: parseInt(id) }, data: { status: false } });
            return { message: 'Eliminado', status: 200, data };
        } catch (e) {
            return { message: e.message, status: 500, data: null };
        }
    };
}

export const warehouseService = new WarehouseService();