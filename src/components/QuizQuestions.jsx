import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import "./QuizPage.css";

export default function QuizQuestions() {
  const { categoryId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  // The fetchQuestions function is wrapped in a useCallback to ensure that it does not get recreated on every render unless categoryId changes.
  // This prevents multiple fetches and ensures that the state is updated correctly.
  const fetchQuestions = useCallback(async () => {
    setLoading(true);
    try {
      const url = `https://opentdb.com/api.php?amount=20&category=${categoryId}`;
      let response = await fetch(url);

      if (response.status === 429) {
        console.error("Too many requests. Please try again later.");
        setLoading(false);
        return;
      }

      let parseData = await response.json();
      console.log(parseData);
      if (parseData.results && parseData.results.length > 0) {
        setQuestions(parseData.results);
      } else {
        setQuestions([]); // Handle case where no questions are found
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setLoading(false);
    }
  }, [categoryId]);

  useEffect(() => {
    // The debounceTimeout in the useEffect ensures that the API request is delayed by 300ms, avoiding rapid successive calls.
    const debounceTimeout = setTimeout(() => {
      fetchQuestions();
    }, 300); // Debounce of 300ms

    // The clearTimeout in the cleanup function prevents multiple requests when the categoryId changes quickly.
    return () => clearTimeout(debounceTimeout); // Cleanup the timeout on unmount or categoryId change
  }, [fetchQuestions]);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="question-container">
      <h2 className="text-3xl mb-7">Quiz Questions</h2>
      {loading ? (
        <p>Loading...</p>
      ) : questions.length > 0 ? (
        <ul>
          {questions.map((question) => {
            const answers = shuffleArray([
              question.correct_answer,
              ...question.incorrect_answers,
            ]);

            return (
              <li key={question.question} className="question mb-7 rounded-xl">
                <h3 className="p-6 px-8 text-lg">{question.question}</h3>
                {answers.map((answer, index) => (
                  <p key={index} className="font-light p-6 px-8 flex align-center cursor-pointer hover:bg-gray-900 ">
                    <input type="radio" name={question.question} size={10} className="cursor-pointer"/>
                    <span className="mx-10">{answer}</span>
                  </p>
                ))}
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No questions found for this category.</p>
      )}
    </div>
  );
}
