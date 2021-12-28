import React from "react";
import classes from "./SignInUser.module.css";
//parent is MainNav
function SignInUser({ authUser, onLogOutHandler }) {
  return (
    <div className={classes.container}>
      <p className={classes.authUserName}> Hello,{authUser.name.split(" ")[0]}</p>
      <div className={classes.imgContainer}>
        <img
          src={authUser.avatarURL}
          alt={authUser.name.split(" ")[0]+'photo'}
          className={classes.avatar}
        />
      </div>
      <button className={classes.button} onClick={onLogOutHandler}>
        Logout
      </button>
    </div>
  );
}

export default SignInUser;
