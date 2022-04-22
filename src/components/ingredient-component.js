import React from "react"
import { useState, useEffect } from "react"

const IngredientComponent = ({
  ingredient,
  servings,
  originalServings,
  index,
  usedMetric,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(ingredient.quantity)
  const [currentUnit, setCurrentUnit] = useState(ingredient.unit)

  useEffect(() => {
    setCurrentQuantity((ingredient.quantity / originalServings) * servings)
  }, [servings])

  useEffect(() => {
    if (currentUnit === "g" || currentUnit === "cups") {
      switch (usedMetric) {
        case "eu":
          setCurrentUnit("g")
          break
        case "us":
          setCurrentUnit("cups")
          break

        default:
          break
      }
    }
  })
  return (
    <tr key={index}>
      <td className="text-primary pe-4">
        {currentQuantity}
        {currentUnit}
      </td>
      <td>{ingredient.name}</td>
    </tr>
  )
}

export default IngredientComponent
