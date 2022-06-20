<template>
  <div class="hero">
    <img v-if="picture" :src="picture" alt="dish picture" />
    <img v-else src="~/assets/images/home.jpg" alt="dish picture" />
    <h1 class="title">{{ title }}</h1>
    <div class="cats">
      <fa v-if="cat.vegetarien" class="fa" :icon="['fas', 'carrot']" />
      <fa v-if="cat.vegan" class="fa" :icon="['fas', 'leaf']" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      default: () => {},
    },
    picture: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.cats {
  margin-top: 1rem;

  .fa {
    color: $color-tangerine;
    font-size: 2.2rem;
    margin: 0 1rem;
  }
}
</style>
