<template>
  <nuxt-link :to="recipeUrl" class="recipe-link">
    <img :src="recipe.picture" :alt="recipe.title" loading="lazy" />
    <h2>{{ recipe.title }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: '',
    },
    recipe: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    recipeUrl() {
      return `${this.category}/${this.recipe.slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
.recipe-link {
  border-radius: 1rem;
  border: 0.1rem solid;
  text-align: center;

  img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
  }

  h2 {
    margin: 1rem;
  }
}
</style>
