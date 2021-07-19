import asyncHandler from "express-async-handler";
import Comment from "../models/commentModel.js";
import Reply from "../models/replyModel.js";

const addReplyToComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);

  const { content } = req.body;
  try {
    const reply = await Reply.create({
      content,
      replyingTo: comment.user,
      user: req.user,
    });

    if (reply) {
      const newReply = await Reply.findOne({ _id: reply._id }).populate("user");
      comment.replies.push(newReply._id);
      comment.save();
      res.json(newReply);
    }
    // comment.replies.push(reply._id);
    // comment.save();

    res.json(reply);
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
  // const { content } = req.body;
});
const addReplyToReply = asyncHandler(async (req, res) => {});

const getReplies = async (req, res) => {
  const comment = await Comment.findById(req.params.commentId);

  // const replies = await Reply.find();
  const replies = await Reply.find({ _id: { $in: comment.replies } }).populate([
    "user",
    "replyingTo",
  ]);
  res.json(replies);
};

export { addReplyToComment, addReplyToReply, getReplies };
