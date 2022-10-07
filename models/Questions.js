import mongoose from "mongoose";

const { Schema } = mongoose;
const questionSchema = new Schema({
  id: { type: String, required: true },
  question: { type: String, required: true },
  answer: { type: Number, required: true },
  options: { type: Array, required: true },
});

const Question = mongoose.models.Question || mongoose.model("Question", questionSchema);

export default Question;
