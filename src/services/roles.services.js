import prisma from '../config/prisma.config.js';

export const getAll = async () => {
    try {
        const data = await prisma.roles.findMany({ where: { status: true } });
        return { message: 'Roles listados', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const getById = async (id) => {
    try {
        const data = await prisma.roles.findUnique({ where: { id: parseInt(id) } });
        if (!data || !data.status) return { message: 'Rol no encontrado', status: 404, data: null };
        return { message: 'Rol encontrado', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const create = async (body) => {
    try {
        const data = await prisma.roles.create({ data: body });
        return { message: 'Rol creado', status: 201, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const update = async (id, body) => {
    try {
        const data = await prisma.roles.update({ where: { id: parseInt(id) }, data: body });
        return { message: 'Rol actualizado', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};

export const remove = async (id) => {
    try {
        const data = await prisma.roles.update({ where: { id: parseInt(id) }, data: { status: false } });
        return { message: 'Rol eliminado', status: 200, data };
    } catch (error) {
        return { message: error.message, status: 500, data: null };
    }
};