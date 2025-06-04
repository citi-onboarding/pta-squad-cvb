import express from "express";
import userController from "./controllers/UserController";
import controllerconsulta from "./controllers/controllerconsulta";
import { match } from "assert";

const routes = express.Router();

routes.post("/user", userController.create);
routes.get("/user", userController.get);
routes.delete("/user/:id", userController.delete);
routes.patch("/user/:id", userController.update);

//os daqui de baixo eu nao entendi o caminho do arquivo entao deixei sem

routes.post("/Consulta", controllerconsulta.create);
routes.delete("/Consulta/:id", controllerconsulta.delete);
routes.patch("/Consulta/:id", controllerconsulta.update);
routes.get("/Consulta", controllerconsulta.get);
routes.get("/Consulta/:nomedono/:nomepet", controllerconsulta.getByDonoAndPet);

export default routes;
