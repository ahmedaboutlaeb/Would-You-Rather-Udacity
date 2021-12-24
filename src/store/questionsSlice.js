import { createSlice } from "@reduxjs/toolkit";
import { _saveQuestion, _saveQuestionAnswer } from "../data/_DATA";
import { saveNewQuestion,addAnswer } from "./usersSlice";

const intialValue = {};

const questionsSlice = createSlice({
  name: "questions",
  initialState: intialValue,
  reducers: {
    setQuestions(state, action) {
      return (state = action.payload);
    },
    newQuestion(state, action) {
      state[action.payload.id] = action.payload;
    },
    addVote(state, action) {
      state[action.payload.questionId][action.payload.answer].votes.push(
        action.payload.authUser
      );
    },
  },
});
function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}
function formatQuestion({ optionOne, optionTwo, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author: author.id,
    optionOne: {
      votes: [],
      text: optionOne,
    },
    optionTwo: {
      votes: [],
      text: optionTwo,
    },
  };
}
//action creator for saving answer for unAnsweredQuestion
export const saveAnswer = ({ questionId, authUser, answer }) => {
  return async (dispatch) => {
    await _saveQuestionAnswer({ questionId, authUser, answer });
    dispatch(addVote({ questionId, authUser, answer }));
    dispatch(addAnswer({ questionId, authUser, answer }));
  };
};
//action creator for saving new question
export const saveQuestion = ({ optionOne, optionTwo, author }) => {
  return async (dispatch) => {
    const newQuestion = formatQuestion({ optionOne, optionTwo, author });
    await _saveQuestion(newQuestion);
    dispatch(questionsSlice.actions.newQuestion(newQuestion));
    dispatch(saveNewQuestion(newQuestion));
  };
};


//destructuring the actions 
export const {setQuestions,newQuestion,addVote} = questionsSlice.actions;
export default questionsSlice.reducer;
