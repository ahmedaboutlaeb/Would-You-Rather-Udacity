import React from "react";
import { Link } from "react-router-dom";


const Question = ({ question, author }) => {
  return (
    <div class="card mb-3" style={{maxWidth: '540px'}}>
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src={author.avatarURL}
            alt=""
            class="img-fluid rounded-start"
            
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{author.name} Aseks..</h5>

            <h6>Would You Rather..</h6>
            <h1>A. {question.optionOne.text}</h1>
            <h1>b. ____________</h1>
            <Link to={`/home/${question.id}`}>View Poll</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
