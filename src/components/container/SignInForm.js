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
    
      
      <div className={classes.formContainer}>

        <header>
          <h1>Welcome to Would you Rather App</h1>
        </header>
        <img  alt = "logo" src="data:image/png;base64,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"/>
      
        <form onSubmit={onSubmitHandler} className={classes.form}>
         
            <label htmlFor="select-user">Sign In</label>
            <select name="" id="select-user" onChange={onChangeHandler}>
              <option value="select">Please Select A user</option>
              {Object.values(users).map((user) => {
                return <option key ={user.id} value={user.id}>{user.name}</option>;
              })}
            </select>
          
          <button className={classes.signinButton}>Sign In</button>
        </form>
      </div>
   
  );
}

export default SignInForm;
