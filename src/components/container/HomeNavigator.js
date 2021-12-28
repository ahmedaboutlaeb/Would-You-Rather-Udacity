import React from "react";
import classes from "./HomeNavigator.module.css";

function HomeNavigator(props) {
  const showUnAnsQuestionsHandler = () => {
    props.displayList(true);
  };
  const showAnsQuestionsHandler = () => {
    props.displayList(false);
  };
  return (
    <nav className={classes.nav}>
      <button onClick={showUnAnsQuestionsHandler} type="button">
        Unanswered Questions
      </button>

      <button onClick={showAnsQuestionsHandler} type="button">
        Answered Questions
      </button>
    </nav>
  );
}

export default HomeNavigator;
