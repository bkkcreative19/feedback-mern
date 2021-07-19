import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    replyingTo: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    replies: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Reply",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Reply", replySchema);
