<template>
  <nav :class="{ open: openNav }">
    <div class="top">
      <nuxt-link to="/" @click.native="toggleNav">
        <button @click="toggleNav">
          <fa class="fa" :icon="['fas', 'home']" />
        </button>
      </nuxt-link>
      <button @click="toggleNav">
        <fa class="fa" :icon="['fas', 'bars']" />
      </button>
    </div>
    <div class="container">
      <div class="max-container">
        <div class="close">
          <button @click="toggleNav">
            <fa class="fa" :icon="['fas', 'times']" />
          </button>
        </div>
        <nuxt-link class="link" to="/dejeuners" @click.native="toggleNav">
          <img src="~/assets/images/dejeuners.jpg" alt="dejeuners" />
          <p>Déjeuners</p>
        </nuxt-link>
        <nuxt-link class="link" to="/principaux" @click.native="toggleNav">
          <img src="~/assets/images/principaux.jpg" alt="dejeuners" />
          <p>plats principaux</p>
        </nuxt-link>
        <nuxt-link class="link" to="/a-cotes" @click.native="toggleNav">
          <img src="~/assets/images/a-cotes.jpg" alt="dejeuners" />
          <p>à cotés</p>
        </nuxt-link>
        <nuxt-link class="link" to="/desserts" @click.native="toggleNav">
          <img src="~/assets/images/desserts.jpg" alt="dejeuners" />
          <p>desserts</p>
        </nuxt-link>
        <nuxt-link class="link" to="/smoothies" @click.native="toggleNav">
          <img src="~/assets/images/smoothies.jpg" alt="dejeuners" />
          <p>Smoothies</p>
        </nuxt-link>
        <nuxt-link class="link" to="/sauces" @click.native="toggleNav">
          <img src="~/assets/images/sauces.jpg" alt="dejeuners" />
          <p>Sauces</p>
        </nuxt-link>
      </div>
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
  head() {
    return {
      bodyAttrs: {
        class: this.openNav ? 'body-fixed' : '',
      },
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
    height: 5rem;
    width: 5rem;
  }

  .top {
    display: flex;
    justify-content: space-between;
  }

  .fa {
    font-size: 2rem;
  }

  .container {
    background: $color-bg;
    bottom: 0;
    left: 0;
    padding: 2rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    transition: 0.3s;
    z-index: 20;

    .max-container {
      margin: 0 auto;
      max-height: 100vh;
      max-width: 100rem;
      overflow: scroll;
      padding: 1rem 1.5rem;
    }

    .close {
      text-align: right;
    }

    .link {
      border-radius: 1rem;
      box-shadow: $color-neumorphism;
      color: $color-black;
      display: flex;
      align-items: center;
      font-size: 1.8rem;
      font-weight: 700;
      margin: 2rem 0;
      text-transform: capitalize;

      img {
        max-width: 6rem;
        border-radius: 1rem 0 0 1rem;
      }

      p {
        padding: $padding-s;
      }
    }
  }
}
</style>
