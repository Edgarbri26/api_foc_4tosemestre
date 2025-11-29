import prisma from '../config/prisma.config.js';

export class CategoryService {
    constructor() { }

    getall = async () => {
        try {
            const data = await prisma.categories.findMany({ where: { status: true } });
            return { message: 'Categorías listadas', status: 200, data };
        } catch (error) {
            return { message: error.message, status: 500, data: null };
        }
    };

    getOne = async (id) => {
        try {
            const data = await prisma.categories.findUnique({ where: { id: parseInt(id) } });
            if (!data || !data.status) return { message: 'No encontrada', status: 404, data: null };
            return { message: 'Encontrada', status: 200, data };
        } catch (error) {
            return { message: error.message, status: 500, data: null };
        }
    };

    create = async (body) => {
        try {
            const data = await prisma.categories.create({ data: body });
            return { message: 'Creada', status: 201, data };
        } catch (error) {
            return { message: error.message, status: 500, data: null };
        }
    };

    update = async (id, body) => {
        try {
            const data = await prisma.categories.update({ where: { id: parseInt(id) }, data: body });
            return { message: 'Actualizada', status: 200, data };
        } catch (error) {
            return { message: error.message, status: 500, data: null };
        }
    };

    delete = async (id) => {
        try {
            const data = await prisma.categories.update({ where: { id: parseInt(id) }, data: { status: false } });
            return { message: 'Eliminada', status: 200, data };
        } catch (error) {
            return { message: error.message, status: 500, data: null };
        }
    };
}

export const categoryService = new CategoryService();