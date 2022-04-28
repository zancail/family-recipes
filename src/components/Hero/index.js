import React from 'react'

const Hero = ({ backgroundColor, backgroundMedia, content }) => {
  console.log(backgroundMedia)
  return (
    <div
      className={`bg--image py-5 mb-5 mt-n5 bg-${backgroundColor[0]}`}
      style={{ backgroundImage: `url(${backgroundMedia.file?.url}` }}
    >
      <div className="container position-relative z-index-1">
        <h1 className="display-5 fw-bold">{content.title}</h1>
        <div className="col-lg-6">
          <p className="lead mb-4">{content.body.body}</p>
          <div className="d-grid gap-2 d-sm-flex ">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
