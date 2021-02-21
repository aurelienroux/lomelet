<template>
  <div>
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
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
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
    font-size: 4rem;
  }
}

.fa {
  font-size: 2rem;
  color: $color-black;
}
</style>
