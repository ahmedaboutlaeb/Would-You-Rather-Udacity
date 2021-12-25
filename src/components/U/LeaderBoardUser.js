import React from "react";
import classes from './LeaderBoardUser.module.css'

function LeaderBoardUser({ user }) {
    
  return (
    <div className={classes.container} >

    

        <div className={classes.imgContainer}>
          <img
            src={user.avatarURL}
            alt={user.name + " photo"}
            
            
          />
        </div>

        <div className={classes.detailsContainer}>
          
            <h5 >{user.name}</h5>
            <p >
              Answered Questions : {user.answeredQuestionNumber}
            </p>
            <p>
              Created Questions : {user.createdQustionsNumber}
            </p>
            <p >score: {user.score}</p>
          
        </div>

     
    </div>
  );
}

export default LeaderBoardUser;
