import React from 'react'
import {useParams} from "react-router-dom"

function QuestionNotFound() {
  const params  = useParams()


  return (
    <div>
    <h1 style={{fontSize:"1rem"}}>Question id "{params.questionId}" Not Found </h1>
    </div>
  )
}

export default QuestionNotFound
