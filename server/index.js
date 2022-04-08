const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

// import { errorHandler, notFound } from "./middlewares/errorHandler.js";

// import userRouter from "./routes/user.js";
// import feedbackRouter from "./routes/feedback.js";
// import commentRouter from "./routes/comment.js";
// import replyRouter from "./routes/reply.js";

dotenv.config();

const app = express();

const db = require("./models");
db.sequelize.sync({ forced: true });

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// DB Connection
// connectDB();

console.log('testing')

// routes
require("./routes/feedback.routes")(app);
require("./routes/auth.routes")(app);
require("./routes/comment.routes")(app);
require("./routes/reply.routes")(app);
// app.get("/test", (req, res) => {});

// app.use("/api/users", userRouter);
// app.use("/api/feedbacks", feedbackRouter);
// app.use("/api/comments", commentRouter);
// app.use("/api/replies", replyRouter);

// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
