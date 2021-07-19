import express from "express";
import {
  getFeedbacks,
  createFeedback,
  getFeedback,
  editFeedback,
  deleteFeedback,
} from "../controllers/feedback.js";
import { auth } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getFeedbacks);
router.get("/:id", getFeedback);
router.post("/", createFeedback);
router.put("/:id", editFeedback);
router.delete("/:id", deleteFeedback);

export default router;
