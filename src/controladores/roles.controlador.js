getOne = async (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    message: `Rol encontrado`,
    id
  });
};

created = async (req, res) => {
  const { id, nombre, status } = req.body;
  return res.status(200).json({
    message: `Nuevo rol creado`,
    data: {
      id: Number(id),
      nombre,
      status
    }
  });
};

updated = async (req, res) => {
  const { id } = req.params;
  const { nombre, status } = req.body;
  return res.status(200).json({
    message: `Rol actualizado`,
    data: {
      id: Number(id),
      nombre,
      status
    }
  });
};

deleted = async (req, res) => {
  const { id } = req.params;
  return res.status(200).json({
    message: `Rol eliminado`,
    id
  });
};
