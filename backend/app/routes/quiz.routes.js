module.exports = app => {
  const quiz = require("../controllers/quiz.controller.js");

  var router = require("express").Router();

  // Create a new Quiz
  router.post("/", quiz.create);

  // // Retrieve all Quiz
  router.get("/", quiz.findAll);

  // // Retrieve a single Quiz with email
  router.get("/:email", quiz.findByEmail);

  // // Update an Quiz with email
  router.put("/:email", quiz.updateByEmail);

  // // Delete an Quiz with email
  router.delete("/:email", quiz.deleteOne);

  // // Delete all Quiz
  router.delete("/", quiz.deleteAll);

  app.use('/api/quiz', router);
};
