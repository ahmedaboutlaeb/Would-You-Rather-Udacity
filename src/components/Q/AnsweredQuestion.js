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
      const checkAnswer = authUser.answers[question.id]; // it will return optionOne or option Two
      //i will give it a background color green 

      console.log(checkAnswer)
      const optionOneActive =
      checkAnswer === "optionOne"
        ? `${classes.optionOne} ${classes.active}`: null;
    const optionTwoActive = checkAnswer === "optionTwo"? `${classes.optionTwo} ${classes.active}`
        : null;
     

  return (
    <div className={classes.container}>
      <header>
        <span>{author.name}</span> asking...
      </header>

      <div className={classes.imgContainer}>
        <img src={author.avatarURL}  alt={author.name+'photo'}/>
      </div>

        <h4 style={{ fontWeight: "bold" }}>Results:</h4>
      <div className={classes.questionContainer}>

        <div className={optionOneActive}>
          <p>{question.optionOne.text}</p>

          <div className={classes.progress}>
            <p>{Math.floor((optionOneLength / allVotes) * 100)}%</p>
            <div style={{ width: `${(optionOneLength / allVotes) * 100}%` }}></div>
          </div>

          <span>
            {optionOneLength} out of {allVotes} votes
          </span>
        </div>

        <div  className={optionTwoActive}>
          <p>{question.optionTwo.text}</p>

          <div className={classes.progress}>
            <p>{Math.floor((optionTwoLength / allVotes) * 100)}%</p>
            <div style={{ width: `${(optionTwoLength / allVotes) * 100}%` , backGroundColor:'red'}}></div>
          </div>

          <span>
            {optionTwoLength} out of {allVotes} votes
          </span>
        </div>
      </div>
    </div>
  );
}

export default AnsweredQuestion;
