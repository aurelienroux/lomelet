<template>
  <div class="glob-container filters">
    <label>
      <input v-model="selectedCategories" type="checkbox" value="tout" />
      <span class="checkmark"></span>
      Tout
    </label>
    <label>
      <input v-model="selectedCategories" type="checkbox" value="thermomix" />
      <span class="checkmark"></span>
      Thermomix
      <fa class="fa" :icon="['fas', 'robot']" />
    </label>
    <label>
      <input v-model="selectedCategories" type="checkbox" value="vegetarien" />
      <span class="checkmark"></span>
      Vegetarien
      <fa class="fa" :icon="['fas', 'carrot']" />
    </label>
    <label>
      <input v-model="selectedCategories" type="checkbox" value="vegan" />
      <span class="checkmark"></span>
      Vegan
      <fa class="fa" :icon="['fas', 'leaf']" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  border-radius: 1rem;
  box-shadow: $color-neumorphism;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem;
}

label {
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  margin: 1.2rem 0;
  padding-left: 3rem;
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

  .fa {
    margin-left: 0.4rem;
    position: relative;
    top: -2px;
  }

  .checkmark {
    background-color: lighten($color-tangerine, $amount: 35);
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
