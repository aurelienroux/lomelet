<template>
  <div>
    <Hero title="plats principaux" />
    <div class="container">
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
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  padding: 4rem;
}
</style>
