import prisma from '../config/prisma.config.js';

export const getAll = async () => {
    try {
        const data = await prisma.areas.findMany({ where: { status: true }, include: { warehouse: true } });
        return { message: 'Areas listadas', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const getById = async (id) => {
    try {
        const data = await prisma.areas.findUnique({ where: { id: parseInt(id) } });
        if (!data || !data.status) return { message: 'No encontrada', status: 404, data: null };
        return { message: 'Encontrada', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const create = async (body) => {
    try {
        const whExists = await prisma.warehouses.findUnique({ where: { id: parseInt(body.warehouse_id) } });
        if (!whExists) return { message: 'Almacén no existe', status: 400, data: null };

        const data = await prisma.areas.create({ data: body });
        return { message: 'Creada', status: 201, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const update = async (id, body) => {
    try {
        if (body.warehouse_id) {
            const whExists = await prisma.warehouses.findUnique({ where: { id: parseInt(body.warehouse_id) } });
            if (!whExists) return { message: 'Almacén no existe', status: 400, data: null };
        }

        const data = await prisma.areas.update({ where: { id: parseInt(id) }, data: body });
        return { message: 'Actualizada', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const remove = async (id) => {
    try {
        const data = await prisma.areas.update({ where: { id: parseInt(id) }, data: { status: false } });
        return { message: 'Eliminada', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};