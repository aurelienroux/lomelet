<template>
  <div>
    <h1>plats principaux</h1>

    <nuxt-link
      v-for="(recipe, index) in recipes"
      :key="index"
      :to="'principaux/' + recipe.slug"
    >
      {{ recipe.title }}
    </nuxt-link>
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
