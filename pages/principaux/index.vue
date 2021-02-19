<template>
  <div>
    <Hero title="plats principaux" />
    <div class="glob-container container">
      <Recipe
        v-for="(recipe, index) in recipes"
        :key="index"
        :recipe="recipe"
        category="principaux"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const recipes = await $content('principaux').fetch()

    return { recipes }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}
</style>
