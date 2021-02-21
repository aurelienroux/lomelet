<template>
  <nav :class="{ open: openNav }">
    <button @click="toggleNav">
      <fa :icon="['fas', 'bars']" />
    </button>
    <div class="container">
      <button @click="toggleNav">
        <fa :icon="['fas', 'times']" />
      </button>
      <nuxt-link class="link" to="/" @click.native="toggleNav">
        Accueil
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
  padding: 2rem 2rem 0;

  &.open .container {
    transform: translateX(0%);
    transition: 0.3s;
  }

  button {
    border-radius: 100%;
    border: none;
    box-shadow: $color-neumorphism;
    height: 4rem;
    margin: 0 1rem;
    width: 4rem;
  }

  .container {
    background: $color-bg;
    bottom: 0;
    left: 0;
    padding: 1rem 2rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 20;
  }

  .link {
    border-radius: 1rem;
    box-shadow: $color-neumorphism;
    color: $color-black;
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
    margin: 2rem 0;
    padding: $padding-s;
    text-transform: capitalize;
  }
}
</style>
