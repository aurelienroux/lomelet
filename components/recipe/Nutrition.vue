<template>
  <div class="container">
    <h2 class="section-title">Par portion</h2>

    <div v-if="this.nutrition.calories !== null">
      <p>calories {{ nutrition.calories }}</p>
      <p>les macros ne sont pas encore disponibles pour ce plat</p>
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
export default {
  props: {
    nutrition: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    totalCal() {
      const { proteines, lipides, glucides } = this.nutrition.macros
      return Math.floor(proteines * 4 + glucides * 4 + lipides * 9)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  font-size: $font-size;
  margin-bottom: 4rem;
}

td {
  padding: 0.3rem;
}

.value {
  text-align: right;
}
</style>
