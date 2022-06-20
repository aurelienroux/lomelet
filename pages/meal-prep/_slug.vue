<template>
  <div>
    <RecipeHero
      :title="recipe.title"
      :picture="recipe.picture"
      :cat="recipe.cat"
    />
    <div class="glob-container">
      <RecipeNutrition :nutrition="recipe.nutrition" />
      <RecipeIngredients :ingredients="recipe.ingredients" :qty="recipe.qty" />
      <RecipeInstructions :instructions="recipe.instructions" />
      <RecipeOrigin :source="recipe.source" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recipe = await $content('meal-prep', params.slug).fetch()

    return { recipe }
  },
}
</script>
