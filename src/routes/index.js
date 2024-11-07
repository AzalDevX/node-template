const express = require('express');
const router = express.Router();
const useRoutes = require('../hooks/useRoutes');

// Usa el hook para configurar las rutas
useRoutes(router);

module.exports = router;
