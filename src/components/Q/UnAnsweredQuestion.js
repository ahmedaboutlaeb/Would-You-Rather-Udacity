import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { saveAnswer } from "../../store/questionsSlice";
import classes from "./UnAnsweredQuestion.module.css";

const UnAnsweredQuestion = ({ question, author, authUser }) => {
  const dispatch = useDispatch();
  const optionOneRef = useRef();
  const optionTwoRef = useRef();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (optionOneRef.current.checked) {
      const optionOne = optionOneRef.current.value;
      return dispatch(
        saveAnswer({
          questionId: question.id,
          authUser: authUser.id,
          answer: optionOne,
        })
      );
    } else if (optionTwoRef.current.checked) {
      const optionTwo = optionTwoRef.current.value;
      return dispatch(
        saveAnswer({
          questionId: question.id,
          authUser: authUser.id,
          answer: optionTwo,
        })
      );
    } else {
      alert("please Check an answer");
    }
  };
  return (
    

      <div className={classes.container}>
        <p className={classes.title}>
          <span>{author.name}</span> Askes..
        </p>
        <div className={classes.devide}>
          <div className={classes.first}>
            <img src={author.avatarURL} alt="" />
          </div>

          <div className={classes.second}>
            <h1>Would You Rather..</h1>

            <form onSubmit={onSubmitHandler}>
              <div>
                <input
                  value="optionOne"
                  id="option-one"
                  name="option"
                  type="radio"
                  ref={optionOneRef}
                />
                <label htmlFor="option-one">{question.optionOne.text}</label>
              </div>
              <div>
                <input
                  value="optionTwo"
                  id="option-two"
                  name="option"
                  type="radio"
                  ref={optionTwoRef}
                />
                <label htmlFor="option-two">{question.optionTwo.text}</label>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
   
  );
};

export default UnAnsweredQuestion;
