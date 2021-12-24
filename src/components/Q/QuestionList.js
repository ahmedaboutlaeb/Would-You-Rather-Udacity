import React from "react";
import Question from "./Question";
import classes from "./QuestionList.module.css";

const QuestionsList = ({ questions, users }) => {
  
  return (
    <div className={classes.container}>
      {questions.map((question) => (
        <Question
          question={question}
          author={users[question.author]}
          key={question.id}
        />
      ))}
    </div>
  );
};

export default QuestionsList;
