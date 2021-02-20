<template>
  <div>
    <img v-if="picture" class="picture" :src="picture" alt="dish picture" />
    <img
      v-else
      class="picture"
      src="~/assets/images/home-plate-cut.png"
      alt="dish picture"
    />
    <h1 class="title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  props: {
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
.picture {
  background: $color-bg-gradient;
  max-height: 30rem;
  object-fit: cover;
  object-position: center;
  width: 100%;
}

.title {
  background: $color-bg-gradient;
  color: $color-white;
  font-family: $playfair;
  font-size: 3.5rem;
  margin: 0 auto;
  max-width: 90%;
  padding: 2rem;
  position: relative;
  text-align: center;
  top: -3rem;
}
</style>
