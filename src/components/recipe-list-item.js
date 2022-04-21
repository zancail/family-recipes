import * as React from "react"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"

const RecipeListItem = (props) => {
  const title = props.recipe.title || props.recipe.slug
  const image = getImage(props.recipe.image)

  const [isSaved, setIsSaved] = useState(false)

  useEffect(() => {
    console.log("Save button has updated")
  }, [isSaved])

  const toggleIsSaved = () => {
    setIsSaved(!isSaved)
  }

  return (
    <li key={props.recipe.slug} className="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div className="card h-100">
        {props.recipe.image && <GatsbyImage image={image} alt={title} />}
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h2 className="h4">
              <Link to={"/" + props.recipe.slug}>{title}</Link>
            </h2>
            <div>{renderRichText(props.recipe.intro)}</div>
          </div>
          <button
            type="button"
            onClick={toggleIsSaved}
            className={`btn border align-self-end ${
              isSaved ? "btn-danger" : ""
            }`}
          >
            Save
          </button>
        </div>
      </div>
    </li>
  )
}

export default RecipeListItem
