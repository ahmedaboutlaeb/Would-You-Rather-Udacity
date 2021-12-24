import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classes from "./QuestionInfo.module.css";
import AnsweredQuestion from "./AnsweredQuestion";
import UnAnsweredQuestion from "./UnAnsweredQuestion";
//this component will render one question component (answeredquestion or usAnsweredQuestion)
function QuestionInfo() {
  //get questions
  const questions = useSelector((state) => state.questions);
  //get the users
  const users = useSelector((state) => state.users);
  //get the authenticated user data
  const authUser = Object.values(users.users).find(
    (user) => user.id === users.authUser
  );
  
  //we can get the question id from the link
  const questionId = useParams().questionId;
  
  //get the question by the question id (author,id,optionOne,optionTwo)
  const question = questions[questionId];
  
  //it will return true or flase
  const isAnswered = Object.keys(authUser.answers).includes(questionId);

  return (
    <div className={classes.container}>
      {!isAnswered && question && (
        <UnAnsweredQuestion question={question} authUser={authUser} author={users.users[question.author]}/>
      )}
      {isAnswered && question && (
        <AnsweredQuestion question={question}  authUser={authUser} author={users.users[question.author]}/>
      )}
    </div>
  );
}

export default QuestionInfo;
