import React from "react"

const ReviewList = (props) => {
  return (
    <ul className="list-unstyled">
      {props.reviews.map((reviewItem, index) => {
        return (
          <li key={index}>
            <div className="d-flex justify-content-between">
              <span>{reviewItem.name} said:</span>
              <span>{reviewItem.score}/5</span>
            </div>

            <p>{reviewItem.message}</p>
            <hr />
          </li>
        )
      })}
    </ul>
  )
}

export default ReviewList
