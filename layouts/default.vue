<template>
  <div class="site-container">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<style lang="scss">
html {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  background: $color-bg;
  box-sizing: border-box;
  font-family: $montserrat;
  font-size: 10px;
  line-height: 1.4;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

body.body-fixed {
  position: fixed;
  width: 100vw;
}

.site-container {
  max-width: 100rem;
  margin: 0 auto;
}

a {
  text-decoration: none;
}

.glob-container {
  padding: $padding-s;
}

.section-title {
  font-family: $playfair;
  margin-bottom: 1rem;
}

.hero {
  font-family: $playfair;
  padding: 0 2rem 2rem;
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
    font-size: 4rem;
    line-height: 1.1;
  }
}

.fa {
  font-size: 1.5rem;
  color: $color-black;
}
</style>
