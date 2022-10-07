import QuestionCard from "../components/QuestionCard";
import dbConnect from "../lib/dbConnect";
import { getAllQuestions } from "../services/questionServices";

export async function getServerSideProps() {
  await dbConnect();

  const questions = await getAllQuestions();

  return {
    props: { questions: questions },
  };
}

export default function Home({ questions }) {
  console.log(questions);

  return (
    <main>
      <h1>All questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question.question}
            answer={question.answer}
            options={question.options}
          />
        ))}
      </ul>
    </main>
  );
}
