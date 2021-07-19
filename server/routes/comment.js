import express from "express";
import { addComment, getComments } from "../controllers/comment.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/:feedbackId", getComments);
router.post("/:feedbackId", auth, addComment);

export default router;
