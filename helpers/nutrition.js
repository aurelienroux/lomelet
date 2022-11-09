export const hasNutritionData = (nutrition) => {
  return (
    nutrition.calories !== null ||
    (nutrition.macros.proteines !== null &&
      nutrition.macros.lipides !== null &&
      nutrition.macros.glucides !== null)
  )
}

export const getCaloriesTotal = (nutrition) => {
  const { proteines, lipides, glucides } = nutrition.macros

  return Math.floor(proteines * 4 + glucides * 4 + lipides * 9)
}
