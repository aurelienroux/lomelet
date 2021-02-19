<template>
  <div class="glob-container container">
    <div class="section">par portion</div>
    <div class="section">
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
  display: flex;
  font-size: 2rem;
}

.section {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

td {
  padding: 0.3rem;
}

.value {
  text-align: right;
}
</style>
