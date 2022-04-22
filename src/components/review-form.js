import React, { useState } from "react"

const ReviewForm = ({ addReviewItem }) => {
  const [reviewName, setReviewName] = useState("")
  const [reviewMessage, setReviewMessage] = useState("")
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
      <fieldset>
        <legend>Score</legend>
        <input
          type="radio"
          name="score"
          id="1"
          value="1"
          checked={reviewScore === 1}
          onChange={(e) => setReviewScore(+e.target.value)}
        />
        <label htmlFor="score1">1</label>
        <input
          type="radio"
          name="score"
          id="2"
          value="2"
          checked={reviewScore === 2}
          onChange={(e) => setReviewScore(+e.target.value)}
        />
        <label htmlFor="score2">2</label>
        <input
          type="radio"
          name="score"
          id="3"
          value="3"
          checked={reviewScore === 3}
          onChange={(e) => setReviewScore(+e.target.value)}
        />
        <label htmlFor="score3">3</label>
        <input
          type="radio"
          name="score"
          id="4"
          value="4"
          checked={reviewScore === 4}
          onChange={(e) => setReviewScore(+e.target.value)}
        />
        <label htmlFor="score4">4</label>
        <input
          type="radio"
          name="score"
          id="5"
          value="5"
          checked={reviewScore === 5}
          onChange={(e) => setReviewScore(+e.target.value)}
        />
        {reviewScore === 1 ? "what :c" : ""}
        <label htmlFor="score5">5</label>
      </fieldset>
      <button type="submit" className="btn btn-primary">
        Submit review
      </button>
    </form>
  )
}

export default ReviewForm
