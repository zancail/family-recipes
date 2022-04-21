import * as React from "react"
import RecipeListItem from "./recipe-list-item"

const RecipeList = (props) => {
  return (
    <ul className="list-unstyled row">
      {props.recipes.map(({ node }, index) => {
        return <RecipeListItem recipe={node} key={index} />
      })}
    </ul>
  )
}

export default RecipeList
