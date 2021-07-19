import express from "express";
import { addReplyToComment, getReplies } from "../controllers/reply.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:commentId", getReplies);
router.post("/:commentId", auth, addReplyToComment);

export default router;
