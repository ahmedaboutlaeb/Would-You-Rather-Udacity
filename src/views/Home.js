import React, { useState } from "react";
import { useSelector } from "react-redux";
import HomeNavigator from "../components/container/HomeNavigator";
import QuestionsList from "../components/Q/QuestionList";
//this component will have 2 child components
//1- HomeNavigator => answered & unAnswered  buttons props == function that show the UnAnswered Q and
//2- QuestionList

function Home() {
  //we need to know which questionlist is selected and save it in variable
  const [defaultList, setDefaultList] = useState(true);
  // select the questions
  const questions = useSelector((state) => state.questions);

  //select the users
  const users = useSelector((state) => state.users);
  // get the authenticated user
  const authUser = users.authUser;
  //get the unanswered questions of the authenticated user
  const unAnsweredQues = Object.values(questions).filter(
    (question) =>
      !Object.keys(users.users[authUser].answers).includes(question.id)
  );

  //get the answered Questions
  const answeredQues = Object.values(questions).filter((question) =>
    Object.keys(users.users[authUser].answers).includes(question.id)
  );


  return (
    <div>
      <section>
        <HomeNavigator displayList={setDefaultList} />

        {/* we will render one question list based on the defaultList status 
                if it true we will render the unanswered questions list
                else we will render the answered one
                */}
        {defaultList && (
          <div>
            <QuestionsList
              questions={unAnsweredQues}
              users={users.users}
            />
          </div>
        )}
        {!defaultList && (
          <div>
            <QuestionsList questions={answeredQues} users={users.users} />
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
