<template>
  <div class="container">
    par portion
    <table>
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
}
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid;
  padding: 1rem;
}
</style>
