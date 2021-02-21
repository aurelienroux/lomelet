<template>
  <div class="hero">
    <img v-if="picture" :src="picture" alt="dish picture" />
    <img v-else src="~/assets/images/home-plate-cut.png" alt="dish picture" />
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
