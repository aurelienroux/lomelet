<template>
  <div class="glob-container">
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

<style lang="scss" scoped></style>
