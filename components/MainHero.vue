<template>
  <div class="hero">
    <img src="~/assets/images/desserts.jpg" alt="hero picture" />
    <h1>Lomelet</h1>
    <h2>recettes faciles et pratiques</h2>
  </div>
</template>

<style lang="scss" scoped>
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
    font-size: 6rem;
  }

  h2 {
    color: $color-tangerine;
    font-size: 1.8rem;
    position: relative;
    top: -1.2rem;
  }
}
</style>
