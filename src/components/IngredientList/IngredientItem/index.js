import React from 'react'
import { useState, useEffect, useRef } from 'react'

const IngredientItem = ({
  ingredient,
  servings,
  originalServings,
  usedMetric,
}) => {
  const firstRun = useRef(true)
  const [currentQuantity, setCurrentQuantity] = useState(ingredient.quantity)
  const [currentUnit, setCurrentUnit] = useState(ingredient.unit)

  useEffect(() => {
    setCurrentQuantity((ingredient.quantity / originalServings) * servings)
  }, [servings, ingredient.quantity, originalServings])

  useEffect(() => {
    // skip the first run
    if (firstRun.current) {
      firstRun.current = false
      return
    }
    if (currentUnit === 'g' || currentUnit === 'cups') {
      console.log(currentQuantity)
      switch (usedMetric) {
        case 'eu':
          setCurrentQuantity(currentQuantity * 150)
          setCurrentUnit('g')
          break
        case 'us':
          setCurrentQuantity(currentQuantity / 150)
          setCurrentUnit('cups')
          break

        default:
          break
      }
    }
    return () => {
      setCurrentQuantity(ingredient.quantity)
    }
  }, [usedMetric])
  return (
    <tr>
      <td className="text-primary pe-4">
        {parseFloat(currentQuantity)}

        {currentUnit}
      </td>
      <td>{ingredient.name}</td>
    </tr>
  )
}

export default IngredientItem
