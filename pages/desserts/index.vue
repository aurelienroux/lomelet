<template>
  <div>
    <Hero title="desserts" />
    <div class="container">
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
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  padding: 4rem;
}
</style>
