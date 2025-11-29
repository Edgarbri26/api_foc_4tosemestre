import prisma from '../config/prisma.config.js';

export class RoleService {

    constructor() { }

    getall = async () => {
        try {
            const roles = await prisma.role.findMany({
                where: { status: true }
            });
            return { message: "Roles obtenidos correctamente", status: 200, data: roles };
        } catch (error) {
            return { message: error.message, status: 500, data: {} };
        }
    }

    getOne = async (id) => {
        try {
            // Importante: Convertir id a Number
            const rol = await prisma.role.findUnique({
                where: { id: Number(id) }
            });
            return { message: "Rol obtenido correctamente", status: 200, data: rol };
        } catch (error) {
            return { message: error.message, status: 500, data: {} };
        }
    }

    create = async (body) => {
        try {
            const existing = await prisma.role.findUnique({
                where: { name: body.name }
            });
            if (existing) {
                return { message: "El rol ya existe", status: 400, data: {} };
            }
            const newRole = await prisma.role.create({ data: body });
            return { message: "Rol creado exitosamente", status: 201, data: newRole };
        } catch (error) {
            return { message: error.message, status: 500, data: {} };
        }
    }

    /**
     * Ejemplo de json
     * {
     *  "name": "Admin",
     *  "status": true
     * }
     */
    update = async (id, body) => {
        try {
            const idNumber = Number(id);
            const existing = await prisma.role.findUnique({ where: { id: idNumber } });
            if (!existing) {
                return { message: "El rol no existe", status: 404, data: {} };
            }
            const updatedRole = await prisma.role.update({
                where: { id: idNumber },
                data: body
            });
            return { message: "Rol actualizado exitosamente", status: 200, data: updatedRole };
        } catch (error) {
            return { message: error.message, status: 500, data: {} };
        }
    }

    delete = async (id) => {
        try {
            const idNumber = Number(id);
            const existing = await prisma.role.findUnique({ where: { id: idNumber } });

            if (!existing) {
                return { message: "El rol no existe", status: 404, data: {} };
            }

            const deletedRole = await prisma.role.update({
                where: { id: idNumber },
                data: { status: false }
            });

            return { message: "Rol eliminado correctamente", status: 200, data: deletedRole };
        } catch (error) {
            return { message: error.message, status: 500, data: {} };
        }
    }
}

export const roleService = new RoleService();