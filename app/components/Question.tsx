import React, { useState } from 'react';
import ToggleButton from './ToggableButton';

function QuestionAndAnswer(props: QnAProps) {
  const [answered, toggleAnswer] = useState(false);
  const [selectedAnswer, setAnswer] = useState(null);
  const { question, answers } = props;

  const answerCollection = answers.map((answer, i) => (
    <span key={i.toString()}>{answer}</span>
  ));

  return (
    <div className="qNa">
      <div className="qNa__question">{question}</div>
      <div className="qNa__answers">{answerCollection}</div>
    </div>
  );
}

type QnAProps = {
  question: JSX.Element;
  answers: Array<JSX.Element>;
};

export default QuestionAndAnswer;
