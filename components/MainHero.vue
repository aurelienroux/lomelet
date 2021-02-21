<template>
  <div class="hero">
    <div class="left">
      <h1>Lomelet</h1>
      <h2>Une collection de recettes faciles et pratiques</h2>
    </div>
    <div class="right">
      <img src="~/assets/images/home-plate-cut.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: $color-bg-gradient;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  max-height: 40rem;
  min-height: 30rem;
  overflow: hidden;

  .left {
    color: $color-white;
    display: flex;
    flex-direction: column;
    font-family: $playfair;
    font-size: 8rem;
    grid-column: 1/3;
    grid-row: 1/2;
    justify-content: center;
    padding: $padding-s;
    z-index: 10;
  }

  h1 {
    font-size: 7.5rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .right {
    align-self: center;
    grid-column: 2/4;
    grid-row: 1/2;
  }

  img {
    grid-column: 2/3;
    max-width: 50rem;
    width: 100%;
  }
}
</style>
