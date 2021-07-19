import asyncHandler from "express-async-handler";
import Feedback from "../models/feedbackModel.js";
import Comment from "../models/commentModel.js";

const addComment = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.feedbackId);

  if (!feedback) res.status(404).json("feedback does not exist");
  const { content } = req.body;
  try {
    const comment = await Comment.create({
      content,
      user: req.user,
    });

    if (comment) {
      const newComment = await Comment.findOne({ _id: comment._id }).populate(
        "user"
      );
      feedback.comments.push(comment._id);
      feedback.save();

      res.json(newComment);
    }
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
  // const { content } = req.body;
});

const getComments = async (req, res) => {
  const feedback = await Feedback.findById(req.params.feedbackId);

  const comments = await Comment.find({
    _id: { $in: feedback.comments },
  })
    .populate({
      path: "replies",
      model: "Reply",
      populate: {
        path: "user",
        model: "User",
      },
    })
    .populate("user");

  res.json(comments);
};

export { addComment, getComments };
