const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

/*
Http Methods
GET, POST, PUT, DELETE
*/

/*
Parameters
Query Params: named and sent on the route after "?" used to filter, pagination, etc (?name=Rafael)
Route Params: used to identify resources (/users/:id)
Request Body: it is the body of the request, used to get the params passed by url. It uses request.params
*/

//Create Session/Login
routes.post("/sessions", SessionController.create);

/* ONGS */
//List ongs
routes.get("/ongs", OngController.index);

//Create ONG
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(10)
        .max(11),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length(2)
    })
  }),
  OngController.create
);

//List Profile
routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown()
  }),
  ProfileController.index
);

/* INCIDENTS */
//List incidents
routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
    })
  }),
  IncidentController.index
);
routes.post("/incidents", IncidentController.create);

routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({ id: Joi.number().required() })
  }),
  IncidentController.delete
);

//make it available to other source files to access/import
module.exports = routes;
