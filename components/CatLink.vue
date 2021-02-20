<template>
  <nuxt-link :to="'/' + category" class="cat-link">
    <img :src="imageUrl" :alt="category" />
    <h3>{{ category }}</h3>
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
  border: 0.1rem solid;
  text-align: center;

  img {
    border-radius: 1rem 1rem 0 0;
    width: 100%;
  }

  h2 {
    margin: 1rem;
  }
}
</style>
