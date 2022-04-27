import * as React from 'react'
import RecipeListItem from './RecipeListItem'

const RecipeList = (props) => {
  return (
    <>
      {props.recipes.length ? (
        <ul className="list-unstyled row">
          {props.recipes.map(({ node }, index) => {
            return <RecipeListItem recipe={node} key={index} />
          })}
        </ul>
      ) : (
        <p>No items found</p>
      )}
    </>
  )
}

export default RecipeList
