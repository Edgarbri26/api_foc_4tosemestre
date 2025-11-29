const RolService = {
    getAll: async (page = 0, pageSize = 0, isOrderBy = 0) => {
                try {
            roles =[
                {
                   id: 1,
                   nombre: 'Admin',
                   status: true,
                },
                {
                   id: 2,
                   nombre: 'User',
                   status: true,
                }
            ];
            return {
                status: 200,
                message: "Todos los roles obtenidos correctamente",
                data: roles,
            }
        } catch (error) {
            console.error("Error fetching roles: ", error);

            return {
                status: 500,
                message: "Internal server error",
                date: null, 
            };
        }
    }
}
export {RolService} ;