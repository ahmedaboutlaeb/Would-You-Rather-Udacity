import React from "react";
import classes from "./LeaderBoardWall.module.css";
import LeaderBoardUser from "./LeaderBoardUser";

const LeaderBoardWall = ({ leaderBoard }) => {
  return (
    <div className={classes.leaderBoard}>
      {leaderBoard.map((user) => (
        <LeaderBoardUser rank={user.rank} user={user.user} key={user.user.id} />
      ))}
    </div>
  );
};

export default LeaderBoardWall;