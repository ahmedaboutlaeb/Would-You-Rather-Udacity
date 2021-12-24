import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { setAuthUser } from "../../store/usersSlice";
import classes from "./SignInForm.module.css";
//the actions here are onsubmit the form we will go to the /home page
function SignInForm() {
  //All users
  const users = useSelector((state) => state.users.users);
  // const authUser = useSelector((state) => state.users.authUser);
  // now we want to create an array of the users names

  const navigator = useNavigate();

  const dispatch = useDispatch();
  const [selectedUser, setSelectedUser] = useState("select");

  const onChangeHandler = (e) => {
    setSelectedUser(e.target.value);
  };
 

  const onSubmitHandler = (e) => {
    e.preventDefault();

    //we set the authenticated user to the selected one from the options
    if (selectedUser === "select") {
      dispatch(setAuthUser(null));
      alert('please select a user')
    } else {
      dispatch(setAuthUser(selectedUser));
      // and after slecetion the navigator will take us to the /home page
      navigator("/home");
    }
  };
  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        <header>
          <h1>Sign in</h1>
        </header>
        <div className={classes.title}>
          <h1>
            <span className={classes.would}>Would</span> you{" "}
            <span className={classes.rather}>Rather</span>
          </h1>
        </div>
        <form onSubmit={onSubmitHandler} className={classes.form}>
          <div>
            <label htmlFor="select-user">Select User</label>
            <select name="" id="select-user" onChange={onChangeHandler}>
              <option value="select">Please Select A user</option>
              {Object.values(users).map((user) => {
                return <option key ={user.id} value={user.id}>{user.name}</option>;
              })}
            </select>
          </div>
          <button className={classes.signinButton}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default SignInForm;
