<template>
  <div>
    <Hero :title="recipe.title" />
    <RecipeMacros :macros="recipe.macros" />
    <RecipeIngredients :ingredients="recipe.ingredients" :qty="recipe.qty" />
    <RecipeInstructions :instructions="recipe.instructions" />

    <!-- <img :src="recipe.picture" alt="" /> -->
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

<style scoped>
img {
  width: 300px;
}
</style>
