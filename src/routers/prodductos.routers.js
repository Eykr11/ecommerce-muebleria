import { Router } from "express";
import { methodHTTP as productoControlelr} from "../controllers/producto.controllers";

const router = Router();

router.get("/",  productoControlelr.getProductos),
router.post("/", productoControlelr.postProducots),
router.delete("/", productoControlelr.deleteProductos)

export default router;