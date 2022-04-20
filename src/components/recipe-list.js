import * as React from "react"
import RecipeListItem from "./recipe-list-item"

// markup
const RecipeList = () => {
  return (
    <ul class="list-unstyled row">
      <RecipeListItem />
    </ul>
  )
}

export default RecipeList