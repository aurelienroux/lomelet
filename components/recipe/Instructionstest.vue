<template>
  <div class="container">
    <h2 class="section-title">Instructions</h2>
    <ul>
      <li v-for="(instruction, index) in instructions" :key="'inst-' + index">
        {{ instruction }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    instructions: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  font-size: $font-size;
  margin-bottom: 4rem;
}

ul {
  padding-left: 2rem;
}

li {
  position: relative;
  margin-bottom: 1rem;

  &:before {
    background: $color-tangerine;
    border-radius: 100%;
    content: '';
    display: inline-block;
    height: 1rem;
    left: -2rem;
    position: absolute;
    top: 0.6rem;
    width: 1rem;
  }
}
</style>
