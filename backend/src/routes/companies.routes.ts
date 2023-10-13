import { Router } from "express";
import companiesControllers from "../controllers/companies.controllers.js";

const router = Router();

router.get("/", companiesControllers.getAll)

router.post("/", companiesControllers.saveOne)

export default router;
