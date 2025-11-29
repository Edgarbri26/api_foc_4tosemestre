# API FOC - 4to Semestre

Este proyecto es una API REST desarrollada con Node.js, Express y Prisma ORM, utilizando PostgreSQL como base de datos.


## integrantes 

- Edgar Briceño
- Jesús Ramos
- Anthony Wu
- Luis Kala

##  Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (v18 o superior recomendado)
- [PostgreSQL](https://www.postgresql.org/)

## Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Edgarbri26/api_foc_4tosemestre.git
   cd api_foc_4tosemestre
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

## ⚙️ Configuración

1. **Variables de Entorno**
   Crea un archivo `.env` o usa el archivo `.env.example` como plantilla para crear el archivo `.env` en la raíz del proyecto basándote en el archivo de ejemplo:
   ```bash
   cp .env
   ```

2. **Configurar la Base de Datos**
   Abre el archivo `.env` y configura la variable `DATABASE_URL` con tus credenciales de PostgreSQL:
   ```env
   DATABASE_URL="postgresql://USUARIO:CLAVE@localhost:5432/NOMBRE_DB?schema=public"
   ```
   - Reemplaza `USUARIO` con tu usuario de PostgreSQL.
   - Reemplaza `CLAVE` con tu contraseña.
   - Reemplaza `NOMBRE_DB` con el nombre de la base de datos que deseas usar.

## Migraciones

Para crear las tablas en la base de datos según el esquema de Prisma, ejecuta:

```bash
npx prisma migrate dev
```
Este comando aplicará las migraciones pendientes y generará el cliente de Prisma.

## Cómo Levantar el Proyecto

### Modo Desarrollo
Para ejecutar el servidor en modo desarrollo (con recarga automática):
```bash
npm run dev
```

### Modo Producción
Para ejecutar el servidor en modo producción:
```bash
npm start
```

El servidor se iniciará por defecto en el puerto **3800**.
Puedes acceder a la API en: `http://localhost:3800/api`

## Documentación del Proyecto

### Estructura
El proyecto sigue una arquitectura MVC (Modelo-Vista-Controlador) adaptada a una API:

- **src/app.js**: Punto de entrada de la aplicación.
- **src/server**: Configuración del servidor Express.
- **src/routes**: Definición de las rutas de la API.
- **src/controladores**: Lógica de los endpoints.
- **src/services**: Lógica de negocio y acceso a datos.
- **src/config**: Archivos de configuración de Prisma.
- **prisma/schema.prisma**: Definición del esquema de la base de datos.

### Endpoints Disponibles
Actualmente, el endpoint principal activo es:

- **Roles**: `/api/roles`
- **Usuarios**: `/api/usuarios`
- **Category**: `/api/category`
- **Warehouse**: `/api/warehouse`
- **Area**: `/api/area`
- **Product**: `/api/product`

