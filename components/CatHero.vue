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

<style lang="scss" scoped>
.hero {
  font-family: $playfair;
  padding: 0 1rem 2rem;
  text-align: center;

  img {
    border-radius: 100%;
    border: 0.7rem solid $color-tangerine;
    border: none;
    box-shadow: $color-neumorphism-large;
    height: 20rem;
    object-fit: cover;
    object-position: center;
    width: 20rem;
  }

  h1 {
    color: $color-tangerine;
    font-size: 3.5rem;
    margin-top: 1rem;
  }
}
</style>
