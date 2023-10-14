import { Router } from "express";
import companiesControllers from "../controllers/companies.controllers.js";

const router = Router(); // Para este proyecto en particular no se consideró necesario hacer un CRUD completo

router.get("/", companiesControllers.getAll)

router.post("/", companiesControllers.saveOne)

export default router;
