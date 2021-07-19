import express from "express";
import morgan from "morgan";
import cors from "cors";

import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";

import userRouter from "./routes/user.js";
import feedbackRouter from "./routes/feedback.js";
import commentRouter from "./routes/comment.js";
import replyRouter from "./routes/reply.js";

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// DB Connection
connectDB();

// routes
app.use("/api/users", userRouter);
app.use("/api/feedbacks", feedbackRouter);
app.use("/api/comments", commentRouter);
app.use("/api/replies", replyRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.DB || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
