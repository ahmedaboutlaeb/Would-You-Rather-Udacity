import React from "react";
import { useSelector } from "react-redux";
import LeaderBoardUser from "./LeaderBoardUser";
import classes from './LeaderBoard.module.css';

//we have to arrange the users according to the total number of questions
//the answered questions and the created ones
// then we will store it in a variable and pass this variable as a prop to the
//LeaderBoardWall componenet

const LeaderBoard = () => {
  //get all users
  const users = useSelector((state) => state.users.users);
  const usersArr = Object.values(users);
  console.log(usersArr);
  let usersInfo = [];
  usersArr.map((user) =>
    usersInfo.push({
      name: user.name,
      avatarURL: user.avatarURL,
      answeredQuestionNumber: Object.values(user.answers).length,
      createdQustionsNumber: Object.values(user.questions).length,
      score:
        Object.values(user.answers).length +
        Object.values(user.questions).length,
    })
  );

  console.log(usersInfo);

  //now we have this array that needs to be sorted according to the score

  usersInfo.sort(function (a, b) {
    let keyA = a.score;
    let KeyB = b.score;
    // Compare the 2 dates
    if (keyA > KeyB) return -1;
    if (keyA < KeyB) return 1;
    return 0;
  });
  console.log(usersInfo);

  return (
    <div className={classes.leaderBoard}>
      {usersInfo.map((user) => (
        <LeaderBoardUser user={user} key={user.name} />
      ))}
    </div>
  );
};

export default LeaderBoard;
