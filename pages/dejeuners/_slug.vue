<template>
  <div>
    <RecipeHero
      :title="recipe.title"
      :picture="recipe.picture"
      :cat="recipe.cat"
    />
    <div class="glob-container">
      <RecipeNutrition :nutrition="recipe.nutrition" />
      <div class="stack">
        <RecipeIngredients
          :ingredients="recipe.ingredients"
          :qty="recipe.qty"
        />
        <RecipeInstructions :instructions="recipe.instructions" />
      </div>
      <RecipeOrigin :source="recipe.source" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recipe = await $content('dejeuners', params.slug).fetch()

    return { recipe }
  },
}
</script>

<style lang="scss" scoped>
@include for-tablet-landscape-up {
  .stack {
    display: flex;
  }
}
</style>
