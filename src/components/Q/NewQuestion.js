import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./NewQuestion.module.css";
import { saveQuestion } from "../../store/questionsSlice";
import { useNavigate } from "react-router-dom";

const AddQuestion = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
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
    if(optionOne==='' || optionTwo===''){
      alert('pleaser enter your option')
    }else{
    await dispatch(saveQuestion({ optionOne, optionTwo, author: authUser }));
    navigator("/home");}
  };
  return (
    <div className={classes.container}>
      <p className={classes.title}>Create New Queston</p>

      <form onSubmit={onSubmitHandler}>
        <h3>Would you rather</h3>
        
          <input type="text" ref={optionOneInput} />
      
        <p>OR</p>

        <input type="text"  ref={optionTwoInput} />

        <button type="submit" className={classes.button}>Submit</button>
      </form>
    </div>
  );
};

export default AddQuestion;
