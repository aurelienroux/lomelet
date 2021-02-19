<template>
  <div class="hero">
    <h1 class="left">Rooks Cooks!</h1>
    <div class="right">
      <img src="~/assets/images/home-plate-cut.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(
    90deg,
    rgba(212, 124, 25, 1) 0%,
    rgba(224, 180, 61, 1) 100%
  );
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-rows: 1fr;
  max-height: 40rem;
  min-height: 30rem;
  overflow: hidden;

  .left {
    align-items: center;
    color: white;
    display: flex;
    font-family: $playfair;
    font-size: 8rem;
    grid-column: 1/3;
    grid-row: 1/2;
    padding: $padding-s;
    z-index: 10;
  }

  .right {
    align-self: center;
    grid-column: 2/4;
    grid-row: 1/2;
  }

  img {
    grid-column: 2/3;
    max-width: 500px;
    width: 100%;
  }
}
</style>
