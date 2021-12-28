import React from "react";
import classes from "./AnsweredQuestion.module.css";
//at this component there is no actoin to dispatch we will just show some data from the passed props

function AnsweredQuestion({ question, author, authUser }) {
  const optionOneLength = question.optionOne.votes.filter(
    (item) => item !== ""
  ).length;

  const optionTwoLength = question.optionTwo.votes.filter(
    (item) => item !== ""
  ).length;

  const allVotes = optionOneLength + optionTwoLength;

  // we need to know the user vote for which answer
  const checkAnswer = authUser.answers[question.id];
   // it will return optionOne or option Two
 

  console.log(checkAnswer);
  const optionOneActive =
    checkAnswer === "optionOne"
      ? `${classes.active} `
      : `${classes.notActive}`;
  const optionTwoActive =
    checkAnswer === "optionTwo"
      ? `${classes.active} `
      : `${classes.notActive}`;

  return (
    <div className={classes.container}>
      <p className={classes.title}>
        <span>{author.name}</span> Askes..
      </p>
      <div className={classes.devide}>
        <div className={classes.first}>
          <img src={author.avatarURL} alt="" />
        </div>

        <div className={classes.second}>
          <h4>Results:</h4>

          <div className={optionOneActive}>
            <p>{question.optionOne.text}</p>
            <p>{Math.floor((optionOneLength / allVotes) * 100)}%</p>
            <progress
              id="file"
              max="100"
              value={(optionOneLength / allVotes) * 100}
            >
              {Math.floor((optionOneLength / allVotes) * 100)}%{" "}
            </progress>

            <p>
              {optionOneLength} out of {allVotes} votes
            </p>
          </div>

          <div className={optionTwoActive}>
            <p>{question.optionTwo.text}</p>
            <p>{Math.floor((optionTwoLength / allVotes) * 100)}%</p>
            <progress 
            max="100" 
            value={(optionTwoLength / allVotes) * 100}
            >
              {Math.floor((optionTwoLength / allVotes) * 100)}%
            </progress>
            <p>{optionTwoLength} out of {allVotes} votes</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default AnsweredQuestion;
