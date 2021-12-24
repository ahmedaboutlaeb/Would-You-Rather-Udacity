import React from "react";
import classes from "./MainNav.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser } from "../../store/usersSlice";
import {useNavigate} from 'react-router-dom';
import SignInUser from "./SignInUser";

function MainNav() {
  const dispacth = useDispatch()
  
  const navigator = useNavigate();
// select the users 
  const users = useSelector((state) => state.users)
//find the authUser data (id name avatarURL answers questions)
  const authUser = Object.values(users.users).find(
    (user) => user.id === users.authUser
  );
 
  const onLogOutHandler = ()=>{
    dispacth(setAuthUser(null));
    // on signout back to the home page
    navigator("/");
  }
  return (
    <div className={classes.container}>
      <header className={classes.header}>
        
          <div className={classes.appName}>
            <span>Would You Rather App</span>
          </div>
          <nav className={classes.nav}>
            <ul>
              <li>
                <NavLink  to="/home" >
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-question">
                  <span>New Question</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard" >
                  <span>Leader Board</span>
                </NavLink>
              </li>
            </ul>
          </nav>
          {users.authUser && <SignInUser authUser = {authUser} onLogOutHandler = {onLogOutHandler}/>}
        
      </header>
    </div>
  );
}

export default MainNav;
