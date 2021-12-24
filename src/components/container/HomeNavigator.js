import React from "react";
import classes from "./HomeNavigator.module.css";

function HomeNavigator(props) {
    const showUnAnsQuestionsHandler = ()=>{
        props.displayList(true)
    }
    const showAnsQuestionsHandler = ()=>{
        props.displayList(false)
    }
  return (
    
    <nav className={classes.nav}>
        <ul>
          <li>
          <button onClick={showUnAnsQuestionsHandler} type="button" className="btn btn-success">Unanswered Questions</button>
            
          </li>
          <li>
            <button onClick={showAnsQuestionsHandler} type="button" className="btn btn-success">Answered Questions</button>
          </li>
        </ul>
      </nav>
   
  );
}

export default HomeNavigator;
