import React from "react";
import classes from "./LeaderBoardUser.module.css";

function LeaderBoardUser({ user }) {
  return (
    <div className={classes.container}>

      <div className={classes.imgContainer}>
        <img src={user.avatarURL} alt={user.name + " photo"} />
      </div>

      <div className={classes.details}>
        <h5>{user.name}</h5>
        <p>Answered Questions : {user.answeredQuestionNumber}</p>
        <p>Created Questions : {user.createdQustionsNumber}</p>
      </div>
      <div className={classes.score}>
        <p>score: </p>
        <h1>{user.score}</h1>
      </div>
    </div>
  );
}

export default LeaderBoardUser;
