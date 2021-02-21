<template>
  <div class="glob-container container">
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
  border-radius: 1rem;
  box-shadow: $color-neumorphism;
  font-size: $font-size;
  margin-bottom: 2rem;
}

ul {
  padding-left: 2rem;
  list-style-type: none;
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
