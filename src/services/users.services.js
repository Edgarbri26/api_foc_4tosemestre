import prisma from '../config/prisma.config.js';

export const getAll = async () => {
  try {
    const data = await prisma.users.findMany({ where: { status: true }, include: { role: true } });
    return { message: 'Usuarios listados', status: 200, data };
  } catch (error) {
    return { message: error.message, status: 500, data: null };
  }
};

export const getById = async (id) => {
  try {
    const data = await prisma.users.findUnique({ where: { id: parseInt(id) }, include: { role: true } });
    if (!data || !data.status) return { message: 'No encontrado', status: 404, data: null };
    return { message: 'Encontrado', status: 200, data };
  } catch (error) {
    return { message: error.message, status: 500, data: null };
  }
};

export const create = async (body) => {
  try {
    // Validar FK
    const roleExists = await prisma.roles.findUnique({ where: { id: parseInt(body.role_id) } });
    if (!roleExists) return { message: 'El rol no existe', status: 400, data: null };

    const data = await prisma.users.create({ data: body });
    return { message: 'Usuario creado', status: 201, data };
  } catch (error) {
    return { message: error.message, status: 500, data: null };
  }
};

export const update = async (id, body) => {
  try {
    if (body.role_id) {
      const roleExists = await prisma.roles.findUnique({ where: { id: parseInt(body.role_id) } });
      if (!roleExists) return { message: 'El rol no existe', status: 400, data: null };
    }

    const data = await prisma.users.update({ where: { id: parseInt(id) }, data: body });
    return { message: 'Usuario actualizado', status: 200, data };
  } catch (error) {
    return { message: error.message, status: 500, data: null };
  }
};

export const remove = async (id) => {
  try {
    const data = await prisma.users.update({ where: { id: parseInt(id) }, data: { status: false } });
    return { message: 'Usuario eliminado', status: 200, data };
  } catch (error) {
    return { message: error.message, status: 500, data: null };
  }
};