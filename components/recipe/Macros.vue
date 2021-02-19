<template>
  <div class="glob-container">
    par portion
    <table>
      <tr>
        <td>calories</td>
        <td>{{ totalCal }}</td>
      </tr>
      <tr v-for="(value, key) in macros" :key="key">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
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

<style lang="scss" scoped></style>
