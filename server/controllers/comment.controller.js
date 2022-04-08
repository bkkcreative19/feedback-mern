const db = require("../models");
const Comment = db.comments;
const Feedback = db.feedbacks;
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.addComment = async (req, res) => {
  const { content } = req.body;
  // Validate request
  if (!content) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Comment
  const comment = {
    content,
    feedback_id: req.params.feedbackId,
    user_id: req.user,
  };

  const newComment = await Comment.create(comment);

  const test = await Comment.findByPk(newComment.comment_id, {
    include: User,
  });

  res.send(test);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.findAll({
    where: {
      feedback_id: req.params.feedbackId,
    },
    include: User,
  });

  res.send(comments);
};
