<template>
  <div>
    <div class="glob-container filters">
      <label v-for="(checkbox, index) in categories" :key="index">
        <input v-model="selectedCategories" type="checkbox" :value="checkbox" />
        <span class="checkmark"></span>
        {{ checkbox }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: ['tout', 'thermomix', 'vegetarien', 'vegan'],
      selectedCategories: ['tout'],
    }
  },
  watch: {
    selectedCategories(categories) {
      this.$emit('updateCategories', categories)
    },
  },
}
</script>

<style lang="scss" scoped>
.filters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 4rem;
}

label {
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  margin: 1rem 0;
  padding-left: 3.5rem;
  position: relative;
  text-transform: capitalize;
  user-select: none;

  & input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .checkmark {
    background-color: $color-gray;
    height: 2.5rem;
    left: 0;
    position: absolute;
    top: -0.3rem;
    width: 2.5rem;
  }

  input:checked ~ .checkmark {
    background-color: $color-tangerine;
  }

  .checkmark:after {
    content: '';
    display: none;
    position: absolute;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 1rem;
    top: 0.7rem;
    width: 0.5rem;
    height: 1rem;
    border: solid $color-white;
    border-width: 0 0.3rem 0.3rem 0;
    transform: rotate(45deg);
  }
}
</style>
