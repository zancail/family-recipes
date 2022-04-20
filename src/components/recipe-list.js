import * as React from "react"
import RecipeListItem from "./recipe-list-item"

// markup
const RecipeList = (props) => {
  return (
    <ul className="list-unstyled row">
      {props.recipes.map(({ node }) => {
        return <RecipeListItem recipe={node} />
      })}
    </ul>
  )
}

export default RecipeList
