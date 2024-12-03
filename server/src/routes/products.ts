import {Router} from 'express';

import * as productRoutes from "../controllers/products";

const router = Router();

router.get("/", productRoutes.getAllProducts);
router.get("/:id", productRoutes.getProductDetails);

router.post("/", productRoutes.postProduct);

router.put("/:id", productRoutes.putUpdateProduct);

router.delete("/:id", productRoutes.deleteProduct);

export default router;