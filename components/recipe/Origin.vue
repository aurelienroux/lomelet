<template>
  <div class="glob-container">
    <a v-if="source" :href="source" target="_blank" rel="noopener noreferrer">
      Voir la recette originale =>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  font-size: 2rem;
  text-align: center;
}
</style>
