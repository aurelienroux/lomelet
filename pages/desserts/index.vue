<template>
  <div>
    <Hero title="Desserts" />
    <div class="glob-container container">
      <Recipe
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipe="recipe"
        category="desserts"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const recipes = await $content('desserts').fetch()

    return { recipes }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: $padding-s;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>
