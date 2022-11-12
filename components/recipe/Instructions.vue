<template>
  <div class="glob-container container">
    <h2 class="section-title">Instructions</h2>

    <div v-for="instruction in instructions" :key="instruction.sectionTitle">
      <h3 v-if="!!instruction.sectionTitle" class="subsection-title">
        {{ instruction.sectionTitle }}
      </h3>
      <ul>
        <li
          v-for="(inst, index) in instruction.sectionInstructions"
          :key="'inst-' + index"
          class="ingredient"
        >
          {{ inst }}
        </li>
      </ul>
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
  border-radius: 1rem;
  box-shadow: $color-neumorphism;
  font-size: $font-size;
  margin-bottom: 2rem;
}

ul {
  padding-left: 2rem;
  list-style-type: none;
}

.ingredient {
  position: relative;
  margin-bottom: 0.7rem;
  font-size: 1.4rem;

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
