"use strict";
// para crear un nuevo proyecto hay que imoportar el módelo
const Project = require("../models/project");
// controladores rutas
var controller = {
  home: function(req, res) {
    return res.status(200).send({
      mesagge: "Soy la home"
    });
  },
  test: function(req, res) {
    return res.status(200).send({
      mesagge: "Soy el método test del controlador de project"
    });
  },

  // método para guardas nuevos documentos
  saveProject: function(req, res) {
    // instanciamos el nuevo modelo de objeto
    var project = new Project();
    // recogemos los párametros que llegan por el body de la petición
    var params = req.body;
    project.name = params.name;
    project.description = params.description;
    project.category = params.category;
    project.year = params.year;
    project.langs = params.langs;
    project.image = null;

    // Guardar lo que recibe en la bbdd
    project.save((err, projectStored) => {
      if (err) return res.status(500).send({ mesagge: "Error al guardar" });
      if (!projectStored)
        return resizeTo
          .status(404)
          .send({ mesagge: "No se ha podido guardar el proyecto" });
      return res.status(200).send({ project: projectStored });
      console.log("Archivos subidos con exito");
    });

    /*return res.status(200).send({
      project:project,
      mesagge: "Método SaveProject"
    });*/
  },

  // método para listar un documento
  getProject: function(req, res) {
    // recoger el valor que llega por la url en este caso projectId
    var projectId = req.params.id;

    // Al poner en el controlador que el parámetro id es opcional, hay que comprobarlo que sea o no null
    if (projectId == null)
      return res.status(404).send({
        mesagge: "El proyecto no existe o no se ha introducido el parámetro id."
      });

    // Usamos el modelo Project
    Project.findById(projectId, (err, project) => {
      if (err)
        return res
          .status(500)
          .send({ mesagge: "Error al devolver los datos." });
      if (!project)
        return res.status(404).send({ mesagge: "El proyecto no existe." });
      return res.status(200).send({
        project
      });
    });
  },

  // Método para listar todos los documentos
  getProjects: function(req, res) {
    // find saca todos los documentos que hay dentro de una entidad
    // se le puede pasar un where project.find({year:2019})
    // exec cuando saque los resultados
    // sort() con el simbolo + o - ordena de mayor a menor
    Project.find({}).sort('-year').exec((err, projects) => {
      if (err)
        return res
          .status(500)
          .send({ mesagge: "Error al devolver los datos." });
      if (!projects)
        return res
          .status(404)
          .send({ mesagge: "No  hay proyectos que mostrar." });
      return res.status(200).send({ projects });
    });
  }
};

module.exports = controller;
