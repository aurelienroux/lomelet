<template>
  <div v-if="source" class="container">
    <a :href="source" target="_blank" rel="noopener noreferrer">
      Recette originale =>
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
  font-size: $font-size;
  margin-bottom: 4rem;
  margin-top: 5rem;
  text-align: center;
}

a {
  background: $color-tangerine;
  color: $color-white;
  font-weight: bold;
  font-size: 2.2rem;
  padding: 1.2rem 4rem;
  border-radius: 2.5rem;
  display: inline-block;
}
</style>
