import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { _getQuestions, _getUsers } from "./data/_DATA";
import { setQuestions } from "./store/questionsSlice";
import { setUsers } from "./store/usersSlice";
import MainNav from "./components/container/MainNav";
import QuestionInfo from "./components/Q/QuestionInfo";
import LeaderBoard from "./components/U/LeaderBoard";
import { Routes, Route } from "react-router-dom";
import SignInForm from "./components/container/SignInForm";
import Home from "./views/Home";
import NewQuestion from "./components/Q/NewQuestion";

function App() {
  const authUser = useSelector((state) => state.users.authUser);

  const dispatch = useDispatch();
  //onloading the page we will set the qustions to the qusetions object on the _DATA.js file
  //and same for the users
  useEffect(() => {
    _getQuestions().then((data) => dispatch(setQuestions(data)));
    _getUsers().then((data) => dispatch(setUsers(data)));
  }, [dispatch]);

  return (
    <div className="App">
      <MainNav />
      <Routes>
        {!authUser && <Route path="*" element={<SignInForm />} />}
        {authUser && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/home/:questionId" element={<QuestionInfo />} />
            <Route path="/new-question" element={<NewQuestion />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
