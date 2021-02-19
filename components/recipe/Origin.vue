<template>
  <div v-if="source" class="glob-container container">
    <a :href="source" target="_blank" rel="noopener noreferrer">
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
.container {
  font-size: 2rem;
  text-align: center;
}
</style>
