<template>
  <div v-if="displayComponent" class="glob-container container">
    <h2 class="section-title">Par portion</h2>
    <div v-if="nutrition.calories !== null">
      <p>
        Calories <span class="value">{{ nutrition.calories }}</span>
      </p>
      <p>Les macros ne sont pas encore disponibles pour ce plat</p>
    </div>
    <table v-else>
      <tr>
        <td>calories</td>
        <td class="value">{{ totalCal }}</td>
      </tr>
      <tr v-for="(value, key) in nutrition.macros" :key="key">
        <td>{{ key }}</td>
        <td class="value">{{ value }}g</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { hasNutritionData, getCaloriesTotal } from '~/helpers/nutrition'

export default {
  props: {
    nutrition: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    displayComponent() {
      return hasNutritionData(this.nutrition)
    },
    totalCal() {
      return getCaloriesTotal(this.nutrition)
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

p {
  margin: 1rem 0;
}

td {
  padding: 0.3rem;
}

.value {
  color: $color-tangerine;
  font-weight: 700;
  text-align: right;
}
</style>
