const db = require("../models");
const Feedback = db.feedbacks;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const feedback = {
    title: req.body.title,
    category: req.body.category,
    upvotes: req.body.upvotes,
    status: req.body.status,
    description: req.body.description,
  };

  // Save Tutorial in the database
  Feedback.create(feedback)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Feedback.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Error retrieving Feedback with id=" + id,
      });
    });
};

exports.findAll = (req, res) => {
  Feedback.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving feedbacks.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Feedback.update(req.body, {
    where: { feedback_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Feedback was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Feedback with id=${id}. Maybe Feedback was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Feedback with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Feedback.destroy({
    where: { feedback_id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Feedback was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Feedback with id=${id}. Maybe Feedback was not found!`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        message: "Could not delete Feedback with id=" + id,
      });
    });
};
