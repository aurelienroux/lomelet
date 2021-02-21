<template>
  <nuxt-link :to="'/' + category" class="cat-link">
    <img :src="imageUrl" :alt="category" />
    <h2>{{ category }}</h2>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: '',
    },
  },
  computed: {
    imageUrl() {
      return require(`~/assets/images/${this.category}.jpg`)
    },
  },
}
</script>

<style lang="scss" scoped>
.cat-link {
  border-radius: 1rem;
  box-shadow: $color-neumorphism;
  text-align: center;

  img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
  }

  h2 {
    margin: 1rem;
    color: $color-black;
    font-size: 2rem;
    text-transform: capitalize;
  }
}
</style>
