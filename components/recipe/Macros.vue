<template>
  <div class="container">
    <h2 class="section-title">Par portion</h2>
    <table>
      <tr>
        <td>calories</td>
        <td>{{ totalCal }}</td>
      </tr>
      <tr v-for="(value, key) in macros" :key="key">
        <td>{{ key }}</td>
        <td class="value">{{ value }}g</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    macros: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    totalCal() {
      const { proteines, lipides, glucides } = this.macros
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
