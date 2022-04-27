import React from 'react'

import IngredientItem from './IngredientItem'

const IngredientList = ({
  ingredients,
  currentServings,
  servings,
  activeMetrics,
}) => {
  return (
    <>
      {ingredients && (
        <div>
          <h2 className="h4">Ingredients</h2>
          <table>
            <tbody>
              {ingredients.map((ingredient, i) => {
                return (
                  <IngredientItem
                    ingredient={ingredient}
                    servings={currentServings}
                    originalServings={servings}
                    key={i}
                    usedMetric={activeMetrics}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}

export default IngredientList
