<template>
  <div v-if="source" class="container">
    <a :href="source" target="_blank" rel="noopener noreferrer">
      Recette originale <fa class="fa" :icon="['fas', 'chevron-right']" />
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
  margin: 4rem 0;
  text-align: center;
}

a {
  background: $color-tangerine;
  border-radius: 2.5rem;
  box-shadow: $color-neumorphism;
  color: $color-white;
  display: inline-block;
  font-size: 2rem;
  font-weight: bold;
  padding: 1.2rem 4rem;
}

.fa {
  color: $color-white;
  position: relative;
  top: 0.1rem;
}
</style>
