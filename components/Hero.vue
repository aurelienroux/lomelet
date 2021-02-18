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
  background-color: lime;
  display: flex;
  justify-content: center;
  min-height: 20rem;
  padding: 4rem;

  h1 {
    color: red;
    font-size: 6rem;
    z-index: 10;
  }
}
</style>
