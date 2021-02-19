<template>
  <div class="glob-container container">
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
  font-size: 2rem;
}

.controls {
  border: 1px solid;
  text-align: center;
}

.control {
  align-items: center;
  display: flex;
  justify-content: center;
}

.ingredients {
  border: 1px solid;
  flex: 3;
  padding-left: 1rem;
}

.numbers {
  text-align: right;
  color: orangered;
}

tr {
  border: 1px solid;
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
