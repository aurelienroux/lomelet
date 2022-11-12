<template>
  <div class="glob-container container">
    <h2 class="section-title">Ingredients</h2>
    <div class="control">
      <button :disabled="portionQty < 2" @click="portionQty--">
        <fa class="fa" :icon="['fas', 'minus']" />
      </button>
      <div class="text">
        <div class="numbers">{{ portionQty }}</div>
        <div>personne<span v-if="portionQty > 1">s</span></div>
      </div>
      <button @click="portionQty++">
        <fa class="fa" :icon="['fas', 'plus']" />
      </button>
    </div>
    <div v-for="ingredient in ingredients" :key="ingredient.sectionTitle">
      <h3 v-if="!!ingredient.sectionTitle" class="subsection-title test">
        {{ ingredient.sectionTitle }}
      </h3>
      <RecipeIngredient
        v-for="(ing, index) in ingredient.sectionIngredients"
        :key="index"
        :ing="ing"
        :portion="portionCalc(ing)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qty: {
      type: Number,
      default: 0,
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      portionQty: 1,
    }
  },
  methods: {
    portionCalc(ingredient) {
      return (ingredient.qty / this.qty) * this.portionQty
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

.control {
  align-items: center;
  display: flex;
  font-weight: bold;
  margin-bottom: 1rem;

  .text {
    flex: 1;
    padding: 2rem;
    text-align: center;
  }

  .numbers {
    color: $color-tangerine;
    font-size: 2.2rem;
  }

  button {
    align-items: center;
    border-radius: 100%;
    box-shadow: $color-neumorphism;
    border: none;
    display: flex;
    height: 6rem;
    justify-content: center;
    width: 6rem;
    cursor: pointer;

    &:disabled .fa {
      color: lighten($color-black, $amount: 50);
    }
  }
}
</style>
