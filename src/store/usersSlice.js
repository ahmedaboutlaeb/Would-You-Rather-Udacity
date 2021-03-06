import { createSlice } from "@reduxjs/toolkit";


const intialValue = {
  authUser:null,
  users: {
    sarahedo: {
      id: "sarahedo",
      name: "Sarah Edo",
      avatarURL: "",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    },
    tylermcginnis: {
      id: "tylermcginnis",
      name: "Tyler McGinnis",
      avatarURL:"",
      answers: {
        vthrdm985a262al8qx3do: "optionOne",
        xj352vofupe1dqz9emx13r: "optionTwo",
      },
      questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
    },
    johndoe: {
      id: "johndoe",
      name: "John Doe",
      avatarURL: "",
      answers: {
        xj352vofupe1dqz9emx13r: "optionOne",
        vthrdm985a262al8qx3do: "optionTwo",
        "6ni6ok3ym7mf1p33lnez": "optionTwo",
      },
      questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
    },
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState: intialValue,
  reducers: {
      // set the users to whatever you want 
    setUsers(state, action) {
      state.users = action.payload;
    },
    //set the authanticated user to user (signin case) or null (sign out case) 
    setAuthUser(state, action) {
      state.authUser = action.payload;
    },
    saveNewQuestion(state, action) {
      state.users[action.payload.author].questions.push(action.payload.id);
    },
    addAnswer(state, action) {
      state.users[action.payload.authUser].answers[action.payload.questionId] =
        action.payload.answer;
    },
  },
});

export const {setUsers,setAuthUser,saveNewQuestion,addAnswer} = usersSlice.actions;
export default usersSlice.reducer;
