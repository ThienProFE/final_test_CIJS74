import React, { useEffect, useState } from "react";
import "./Quiz.css";

const Quiz = () => {
  const [listQuiz, setListQuiz] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      fetch("https://62850afd3060bbd34743a536.mockapi.io/final_test")
        .then((response) => response.json())
        .then((data) => {
          setListQuiz(data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 10);
      alert("Bạn đã trả lời đúng và được cộng thêm 10 điểm");
    } else {
      alert("Bạn trả lời sai rồi, tiếc quá! Bạn được 0 điểm ở câu này nhé.");
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < listQuiz.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      {showScore ? (
        <div className="question-score">
          Tổng số điểm bạn đạt được là{" "}
          <span className="score">
            {score}/{listQuiz.length * 10}
          </span>{" "}
          điểm
        </div>
      ) : (
        <>
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{listQuiz.length}
          </div>
          <div className="question-name">
            {listQuiz[currentQuestion]?.question}
          </div>
          <div className="question-answer">
            {listQuiz[currentQuestion]?.answer.map((item, idx) => (
              <button
                key={idx}
                className="btn"
                onClick={() => handleAnswer(item.isCorrect)}
              >
                {item.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
