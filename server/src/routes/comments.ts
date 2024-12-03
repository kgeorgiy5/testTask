import {Router} from "express";

import * as commentController from "../controllers/comments";

const router = Router();

router.post("/", commentController.postAddComment);

router.delete("/:id", commentController.deleteComment);

export default router;