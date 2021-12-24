import React from "react";
import { Link } from "react-router-dom";
import classes from "./Question.module.css";

const Question = ({ question, author }) => {
  return (
    <div className={classes.question}>
      <header><span className={classes.authorName}>{author.name}</span> Askes..</header>
      <div className={classes.questionContent}>
        <div className={classes["img-holder"]}>
          <img src={author.avatarURL} alt="" className={classes.img} />
        </div>
        <div>
          <h6>Would You Rather..</h6>
          <p>A. {question.optionOne.text}</p>
          <p>b. .....</p>
        <Link to={`/home/${question.id}`}>View Poll</Link>
        </div>
      </div>
    </div>
  );
};

export default Question;
