<template>
  <div class="glob-container">
    <ul class="container">
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
  font-size: 2rem;
  list-style-type: none;
  padding-left: 2rem;
}

li {
  position: relative;
  margin-bottom: 1rem;

  &:before {
    background: red;
    border-radius: 100%;
    content: '';
    display: inline-block;
    height: 1rem;
    left: -2rem;
    position: absolute;
    top: 0.8rem;
    width: 1rem;
  }
}
</style>
