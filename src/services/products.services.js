import prisma from '../config/prisma.config.js';

export class ProductService {
  constructor() { }

  getall = async () => {
    try {
      const data = await prisma.products.findMany({ where: { status: true }, include: { category: true, area: true } });
      return { message: 'Productos listados', status: 200, data };
    } catch (error) {
      return { message: error.message, status: 500, data: null };
    }
  };

  getOne = async (id) => {
    try {
      const data = await prisma.products.findUnique({ where: { id: parseInt(id) } });
      if (!data || !data.status) return { message: 'No encontrado', status: 404, data: null };
      return { message: 'Encontrado', status: 200, data };
    } catch (error) {
      return { message: error.message, status: 500, data: null };
    }
  };

  create = async (body) => {
    try {
      const catExists = await prisma.categories.findUnique({ where: { id: parseInt(body.category_id) } });
      if (!catExists) return { message: 'Categoría no existe', status: 400, data: null };

      const areaExists = await prisma.areas.findUnique({ where: { id: parseInt(body.area_id) } });
      if (!areaExists) return { message: 'Área no existe', status: 400, data: null };

      const data = await prisma.products.create({ data: body });
      return { message: 'Producto creado', status: 201, data };
    } catch (error) {
      return { message: error.message, status: 500, data: null };
    }
  };

  update = async (id, body) => {
    try {
      const data = await prisma.products.update({ where: { id: parseInt(id) }, data: body });
      return { message: 'Producto actualizado', status: 200, data };
    } catch (error) {
      return { message: error.message, status: 500, data: null };
    }
  };

  delete = async (id) => {
    try {
      const data = await prisma.products.update({ where: { id: parseInt(id) }, data: { status: false } });
      return { message: 'Producto eliminado', status: 200, data };
    } catch (error) {
      return { message: error.message, status: 500, data: null };
    }
  };
}

export const productService = new ProductService();