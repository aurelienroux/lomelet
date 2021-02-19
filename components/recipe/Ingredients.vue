<template>
  <div class="glob-container container">
    <h2 class="section-title">Ingredients</h2>
    <div class="controls">
      <div>{{ portionQty }} personne<span v-if="portionQty > 1">s</span></div>
      <div class="control">
        <button @click="portionQty++">+</button>
        <button :disabled="portionQty < 2" @click="portionQty--">-</button>
      </div>
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
}

.controls {
  text-align: center;
}

.control {
  align-items: center;
  display: flex;
  justify-content: center;
}

.ingredients {
  flex: 3;
  padding-left: 1rem;
}

.numbers {
  color: $color-tangerine;
  font-weight: bold;
  min-width: 8rem;
  text-align: right;
  vertical-align: top;
}

button {
  align-items: center;
  border-radius: 100%;
  border: 1px solid;
  display: flex;
  height: 6rem;
  justify-content: center;
  margin: 2rem;
  width: 6rem;
}
</style>
