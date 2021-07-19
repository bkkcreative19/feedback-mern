import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    replies: [{ type: mongoose.Types.ObjectId, ref: "Reply" }],
  },
  { timestamps: true }
);

export default mongoose.model("Comment", commentSchema);
