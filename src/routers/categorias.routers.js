import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/",  categoriaController.getCategorias),
router.post("/", categoriaController.postCategorias),
router.delete("/", categoriaController.deleteCategory)

export default router;