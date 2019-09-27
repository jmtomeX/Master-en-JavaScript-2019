'use strict'
// carga el mófulo express para crear nuestras rutas
const express = require('express');
// cargamos el controlador
var ProjectController = require('../controllers/project');

// cargamos el servicio de la ruta para usar sus métodos
const router = express.Router();

// que utilce el método del controlador
router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
// la ? indica que el parámetro id es opcional
router.get('/project/:id?', ProjectController.getProject);
// sacar resultados del backend
router.get('/projects', ProjectController.getProjects);
// modificar un documento
router.put('/project/:id', ProjectController.updateProject);
// eliminar un documento
router.delete('/project/:id', ProjectController.deleteProject);

// utliza la variable router para poderlo utilizarolo importarlo
module.exports = router;
