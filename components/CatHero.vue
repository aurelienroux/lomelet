<template>
  <div class="hero">
    <img :src="imageUrl" alt="hero picture" />
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageUrl() {
      return require(`~/assets/images/${this.image}.jpg`)
    },
  },
}
</script>
