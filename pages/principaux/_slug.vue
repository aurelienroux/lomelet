<template>
  <div>
    <RecipeHero :title="recipe.title" :picture="recipe.picture" />
    <div class="glob-container">
      <RecipeMacros :macros="recipe.macros" />
      <RecipeIngredients :ingredients="recipe.ingredients" :qty="recipe.qty" />
      <RecipeInstructions :instructions="recipe.instructions" />
      <RecipeOrigin :source="recipe.source" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recipe = await $content('principaux', params.slug).fetch()

    return { recipe }
  },
}
</script>
