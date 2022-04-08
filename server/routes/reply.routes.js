const auth = require("../middlewares/authMiddleware.js");

module.exports = (app) => {
  const replies = require("../controllers/reply.controller.js");

  const router = require("express").Router();

  router.get("/:commentId", replies.getReplies);

  // Create a new Tutorial
  router.post("/:commentId", auth, replies.addReply);

  //   // Retrieve all Tutorials
  //   router.get("/", feedbacks.findAll);

  //   // // Retrieve all published Tutorials
  //   // router.get("/published", tutorials.findAllPublished);

  //   // // Retrieve a single Tutorial with id
  //   router.get("/:id", feedbacks.findOne);

  //   // // Update a Tutorial with id
  //   router.put("/:id", feedbacks.update);

  //   // Delete a Tutorial with id
  //   router.delete("/:id", feedbacks.delete);

  // // Delete all Tutorials
  // router.delete("/", tutorials.deleteAll);

  app.use("/api/replies", router);
};
