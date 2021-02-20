<template>
  <div class="hero">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.hero {
  align-items: center;
  background: $color-bg-gradient;
  display: flex;
  justify-content: center;
  padding: 3rem 1.5rem 6rem;

  h1 {
    color: $color-white;
    font-family: $playfair;
    font-size: 5rem;
    text-align: center;
    z-index: 10;
  }
}
</style>
