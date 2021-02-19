<template>
  <nav :class="{ open: openNav }">
    <h2 @click="toggleNav">menu</h2>
    <div class="container">
      <h2 @click="toggleNav">close</h2>
      <nuxt-link class="link" to="/" @click.native="toggleNav">
        home
      </nuxt-link>
      <nuxt-link class="link" to="/principaux" @click.native="toggleNav">
        principaux
      </nuxt-link>
      <nuxt-link class="link" to="/desserts" @click.native="toggleNav">
        desserts
      </nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      openNav: false,
    }
  },
  methods: {
    toggleNav() {
      this.openNav = !this.openNav
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  &.open .container {
    transform: translateX(0%);
    transition: 0.3s;
  }

  .container {
    background: salmon;
    border: 1px solid;
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 20;
  }

  .link {
    border: 1px solid;
    display: block;
    font-size: 2rem;
    padding: $padding-s;
  }
}
</style>
