import React from "react";
import { Link } from "react-router-dom";
import classes from './Question.module.css';

const Question = ({ question, author }) => {
  return (
    <div className={classes.container}>
      <p className={classes.title}><span>{author.name}</span> Askes..</p>
      <div className={classes.devide}>
        <div className={classes.first}>
          <img src={author.avatarURL} alt="" />
        </div>

        <div className={classes.second}>
          <h1>Would You Rather..</h1>
          <p>.. {question.optionOne.text}..</p>
         
          <Link to={`/questions/${question.id}`}>View Poll</Link>
        </div>
      </div>
    </div>
  );
};

export default Question;
