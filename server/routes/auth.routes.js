module.exports = (app) => {
  const auth = require("../controllers/auth.controller.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/signup", auth.signup);
  router.post("/signin", auth.signin);

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

  app.use("/api/auth", router);
};
