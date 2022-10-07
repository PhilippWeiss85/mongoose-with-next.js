import dbConnect from "../lib/dbConnect";
import Question from "../models/Questions";

export async function getAllQuestions() {
  await dbConnect();

  const questions = await Question.find();
  const sanitizedQuestions = questions.map((question) => ({
    id: question._id.toString(),
    question: question.question,
    answer: question.answer,
    options: question.options,
  }));

  return sanitizedQuestions;
}
