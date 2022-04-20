import * as React from "react"
import { Link } from "gatsby"

const RecipeListItem = (props) => {
  const title = props.recipe.title || props.recipe.slug
  return (
    <li key={props.recipe.slug} class="col-lg-4">
      <div className="card">
        <div className="card-body">
          <h2>
            <Link to={"/" + props.recipe.slug}>{title}</Link>
          </h2>
        </div>
      </div>
    </li>
  )
}

export default RecipeListItem
