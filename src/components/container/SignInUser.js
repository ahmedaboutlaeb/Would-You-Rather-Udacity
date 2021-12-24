import React from "react";
import classes from "./SignInUser.module.css";
//parent is MainNav
function SignInUser({ authUser, onLogOutHandler }) {
  return (
    <div className={classes.container}>
      <div className={classes.authUserName}>{authUser.name.split(" ")[0]}</div>
      <button className={classes.button} onClick={onLogOutHandler}>
        Logout
      </button>
      <div className={classes.imgContainer}>
        <img
          src={authUser.avatarURL}
          alt={authUser.name.split(" ")[0]+'photo'}
          className={classes.avatar}
        />
      </div>
    </div>
  );
}

export default SignInUser;
