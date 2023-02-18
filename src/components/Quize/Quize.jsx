import React, { useState } from "react";
import './Quize.css'

const Quize = () => {
  const questions = [
    {
      questionText: 'React JS це -',
      answerOptions: [
        { answerText: 'Фреймворк.', isCorrect: false },
        { answerText: 'Мова програмування.', isCorrect: false },
        { answerText: 'Бібліотека JS.', isCorrect: true },
        { answerText: 'Розширений синтаксис JS.', isCorrect: false },
      ],
    },
    {
      questionText: 'JSX це -',
      answerOptions: [
        { answerText: 'Фреймворк.', isCorrect: false },
        { answerText: 'Розширений синтаксис JS.', isCorrect: true },
        { answerText: 'Мова програмування.', isCorrect: false },
        { answerText: 'Конструктор сайту.', isCorrect: false },
      ],
    },
    {
      questionText: 'Компонент це -',
      answerOptions: [
        { answerText: 'це об`єкт JavaScript, переданий Компоненту.', isCorrect: false },
        { answerText: 'незалежний багаторазовий інтерфейс.', isCorrect: true },
        { answerText: 'Конструктор.', isCorrect: false },
        { answerText: 'Запуск імперативних анімацій.', isCorrect: false },
      ],
    },
    {
      questionText: 'Що таке props?',
      answerOptions: [
        { answerText: 'Дозволяє компонентам функцій використовувати стан та інші попередні функції тільки для класу.', isCorrect: false },
        { answerText: 'Керування фокусом, виділенням тексту або відтворенням мультимедіа.', isCorrect: false },
        { answerText: 'Планує оновлення об`єкта стану компонента', isCorrect: false },
        { answerText: 'Це об`єкт JavaScript, переданий Компоненту, який містить властивості конфігурації', isCorrect: true },
      ],
    },
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuetions = currentQuestion + 1;
    if (nextQuetions < questions.length) {
      setCurrentQuestion(nextQuetions);
    }
    else {
      setShowScore(true)
    }
  }

  return (
    <div className="general_quiz">
      <h1 className='header'>Quiz</h1>
      <div className="app">
        {showScore ? (
          <div className='score-section'>
            You scored {score} out of {questions.length}
          </div>
        )
          :
          (
            <>
              <div className='question-section'>
                <div className='question-count'>
                  <span>Question {currentQuestion + 1 + '/'}</span>{questions.length}
                </div>
                <div className='question-text'>
                  {questions[currentQuestion].questionText}
                </div>
              </div>

              <div className='answer-section'>
                {
                  questions[currentQuestion].answerOptions.map((answerOptions) => (
                    <button onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
                  ))
                }
              </div>
            </>
          )}
      </div>
    </div>
  );
}



export default Quize