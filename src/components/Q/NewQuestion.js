
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { saveQuestion } from "../../store/questionsSlice";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const authUser = Object.values(users.users).find(
    (user) => user.id === users.authUser
    );
    const optionOneInput = useRef();
    const optionTwoInput = useRef();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const optionOne = optionOneInput.current.value;
    const optionTwo = optionTwoInput.current.value;
    await dispatch(saveQuestion({ optionOne, optionTwo, author: authUser }));
    navigator("/home");
  };
  return (
    <div className="card" style={{width:'25rem'}}>
      <h5 className="text-center">Create New Queston </h5>
      <p style={{fontWeight:'bold'}} className="text-center">Would You Rather</p>
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3">
          <input type="text" className="form-control" ref={optionOneInput} />
        </div>
         <p className="text-center" style={{fontWeight:'bold'}}>OR</p>
        <div class="mb-3">
          <input type="text" className="form-control" ref={optionTwoInput} />
        </div>

        <button type="submit" className="btn btn-primary"> Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
