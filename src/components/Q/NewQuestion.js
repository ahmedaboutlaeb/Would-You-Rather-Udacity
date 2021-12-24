
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveQuestion } from "../../store/questionsSlice";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const optionOneInput = useRef();
  const optionTwoInput = useRef();
  const users = useSelector((state) => state.users);
  const authUser = Object.values(users.users).find(
    (user) => user.id === users.authUser
  );
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const optionOne = optionOneInput.current.value;
    const optionTwo = optionTwoInput.current.value;
    console.log(optionOne)
    console.log(optionTwo)
    await dispatch(saveQuestion({ optionOne, optionTwo, author: authUser }));
    navigator("/home");
  };
  return (
    <div className="card" style={{width:'25rem'}}>
      <h5 className="text-center">Create New Queston </h5>
      <p style={{fontWeight:'bold'}} className="text-center">Would You Rather</p>
      <form onSubmit={onSubmitHandler}>
        <div class="mb-3">
          <input type="text" class="form-control" ref={optionOneInput} />
        </div>
         <p className="text-center" style={{fontWeight:'bold'}}>OR</p>
        <div class="mb-3">
          <input type="text" class="form-control" ref={optionTwoInput} />
        </div>

        <button type="submit" class="btn btn-primary"> Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
