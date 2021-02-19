<template>
  <a v-if="source" :href="source" target="_blank" rel="noopener noreferrer">
    recette originale
  </a>
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
