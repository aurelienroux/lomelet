<template>
  <div class="container">
    <h2 class="section-title">Ingredients</h2>

    <div class="control">
      <button :disabled="portionQty < 2" @click="portionQty--">-</button>
      <div class="text">
        <div class="numbers">{{ portionQty }}</div>
        <div>personne<span v-if="portionQty > 1">s</span></div>
      </div>
      <button @click="portionQty++">+</button>
    </div>

    <div class="ingredients">
      <table>
        <tr v-for="(ing, index) in ingredients" :key="index">
          <td class="numbers">{{ portionCalc(ing) }}</td>
          <td>
            <span v-if="ing.unit !== 'unite'">
              {{ ing.unit }}
            </span>
            {{ ing.name
            }}<span v-if="ing.unit === 'unite' && portionCalc(ing) > 1">s</span>
          </td>
        </tr>
      </table>
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
  font-size: $font-size;
  margin-bottom: 4rem;
}

.control {
  align-items: center;
  display: flex;
  font-weight: bold;

  .text {
    flex: 1;
    padding: 2rem;
    text-align: center;
  }

  button {
    align-items: center;
    background: $color-tangerine;
    border-radius: 100%;
    border: none;
    display: flex;
    height: 6rem;
    justify-content: center;
    width: 6rem;

    &:disabled {
      background: lighten($color-tangerine, $amount: 30);
    }
  }
}

.ingredients {
  flex: 3;
  padding-left: 1rem;
}

.numbers {
  color: $color-tangerine;
  font-size: 2.2rem;
  min-width: 8rem;
  text-align: center;
  vertical-align: top;
}
</style>
