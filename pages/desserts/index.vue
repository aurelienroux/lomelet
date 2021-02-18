<template>
  <div>
    <h1>desserts</h1>

    <nuxt-link
      v-for="(recipe, index) in recipes"
      :key="index"
      :to="'desserts/' + recipe.slug"
    >
      {{ recipe.title }}
    </nuxt-link>
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
