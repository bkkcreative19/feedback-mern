import asyncHandler from "express-async-handler";
import Feedback from "../models/feedbackModel.js";
import Comment from "../models/commentModel.js";
import Reply from "../models/replyModel.js";

const getFeedbacks = asyncHandler(async (req, res) => {
  try {
    const feedbacks = await Feedback.find({});

    res.json(feedbacks);
  } catch (err) {
    res.status(401).json(err);
  }
});
const getFeedback = asyncHandler(async (req, res) => {
  try {
    const feedback = await Feedback.findOne({ _id: req.params.id }).populate([
      "comment",
      {
        path: "comments",
        populate: { path: "user" },
      },
    ]);
    res.json(feedback);
  } catch (err) {
    res.status(401).json(err);
  }
});

const createFeedback = asyncHandler(async (req, res) => {
  const { title, category, upvotes, status, description } = req.body;

  const feedback = await Feedback.create({
    title,
    category,
    upvotes,
    status,
    description,
  });

  if (feedback) {
    res.status(201).json(feedback);
  } else {
    res.status(400);
    throw new Error("Error creating new feedback");
  }
});

const editFeedback = asyncHandler(async (req, res) => {
  const { title, category, upvotes, status, description } = req.body;

  const { data } = await Feedback.findByIdAndUpdate(
    req.params.id,
    {
      title,
      category,
      upvotes,
      status,
      description,
    },
    { new: true }
  );

  res.json(data);
});

const deleteFeedback = asyncHandler(async (req, res) => {
  const feedback = await Feedback.findById(req.params.id);
  // console.log(feedback);
  const comments = await Comment.find({ _id: { $in: feedback.comments } });

  comments.forEach(async (comment) => {
    const replies = await Reply.find({
      _id: { $in: comment.replies },
    }).deleteMany();

    await Comment.find({ _id: { $in: feedback.comments } }).deleteMany();
    await Feedback.findById(req.params.id).deleteOne();

    // console.log(replies);
  });

  // console.log(replies);
  // const replies = await Reply.find({ _id: { $in: comments.replies } });
  // console.log(replies);
  // try {
  //   await Feedback.deleteOne({ _id: req.params.id });
  // } catch (err) {
  //   res.status(400).json({ message: "not found" });
  // }
});

export {
  getFeedbacks,
  createFeedback,
  getFeedback,
  editFeedback,
  deleteFeedback,
};
