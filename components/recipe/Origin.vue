<template>
  <div class="glob-container">
    <a v-if="source" :href="source" target="_blank" rel="noopener noreferrer">
      recette originale
    </a>
  </div>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
