const db = require("../models");
const Comment = db.comments;
const Reply = db.replies;
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.addReply = async (req, res) => {
  const { content } = req.body;
  // Validate request
  if (!content) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Comment
  const reply = {
    content,
    comment_id: req.params.commentId,
    user_id: req.user,
  };

  const newReply = await Reply.create(reply);

  const test = await Reply.findByPk(newReply.reply_id, {
    include: User,
  });

  res.send(test);
};

exports.getReplies = async (req, res) => {
  const replies = await Reply.findAll({
    where: {
      comment_id: req.params.commentId,
    },
    include: User,
  });

  res.send(replies);
};
