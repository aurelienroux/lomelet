<template>
  <div class="container">
    <div v-for="(instruction, index) in instructions" :key="'inst-' + index">
      {{ instruction }}
    </div>
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
  border: 1px solid;
  padding: 1rem;
}
</style>
