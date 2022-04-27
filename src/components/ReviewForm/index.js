import React, { useState } from 'react'

const ReviewForm = ({ addReviewItem }) => {
  const createScoreRadioInputs = () => {
    const elements = []
    for (let index = 1; index < 6; index++) {
      elements.push(
        <div key={index} className="me-2">
          <input
            type="radio"
            name="score"
            id={`score${index}`}
            value={index}
            checked={reviewScore === index}
            onChange={(e) => setReviewScore(+e.target.value)}
            className="me-1"
          />
          <label htmlFor={`score${index}`}>{index}</label>
        </div>
      )
    }
    return elements.map((el) => {
      return el
    })
  }

  const [reviewName, setReviewName] = useState('')
  const [reviewMessage, setReviewMessage] = useState('')
  const [reviewScore, setReviewScore] = useState(5)
  const handleSubmit = (e) => {
    e.preventDefault()
    addReviewItem({
      name: reviewName,
      message: reviewMessage,
      score: reviewScore,
    })
  }
  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Name</label>
      <input
        className="form-control"
        type="text"
        name="name"
        id="name"
        value={reviewName}
        onChange={(e) => setReviewName(e.target.value)}
      />
      <label htmlFor="review">Review</label>
      <textarea
        className="form-control"
        name="review"
        id="review"
        cols="30"
        rows="10"
        value={reviewMessage}
        onChange={(e) => setReviewMessage(e.target.value)}
      ></textarea>
      <fieldset className="mb-3">
        <legend>Score</legend>
        <div className="d-flex">{createScoreRadioInputs()}</div>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Submit review
      </button>
    </form>
  )
}

export default ReviewForm
