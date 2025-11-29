export class UserController {
  constructor() {}

   getAll= async (req, res) => {
    return res.status(200).json({ 
        message: 'Todos los Usuarios en el sistema' 
    });;
  };

   getOne= async (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ 
        message: `Usuario encontrado` ,
        id
    });
  };

   created= async (req, res) => {
    const {id, nombre, clave ,status, role_id}= req.body;
    return res.status(200).json({
        message: `Nuevo usuario creado`,
        data: {
            id: Number(id),
            nombre,
            clave,
            status,
            role_id
        }
    });
  };

   updated= async (req, res) => {
    const { id } = req.params;
    const{nombre, status}= req.body;
    return res.status(200).json({
        message: `Rol actualizado`,
        data: {
            id: Number(id),
            nombre,
            status
        }
    });
  };

   deleted= async (req, res) => {
    const { id } = req.params;
    return res.status(200).json({ 
        message: `Rol eliminado` ,
        id
    });
  };
}
