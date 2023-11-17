import { Router } from "express";
import companiesControllers from "../controllers/companies.controllers.js";

const router = Router(); // Para este proyecto en particular no se consideró necesario hacer un CRUD completo

router.post("/", companiesControllers.saveOne)

router.get("/page/", companiesControllers.getPage)
router.get("/page/:page", companiesControllers.getPage)

router.get("/:id", companiesControllers.getById)

router.put("/:id", companiesControllers.updateById)

router.delete("/:id", companiesControllers.deleteById)

export default router;
