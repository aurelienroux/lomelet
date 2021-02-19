<template>
  <div class="hero">
    <div class="left">Rooks Cooks!</div>
    <div class="right">
      <img src="~/assets/images/home-plate-cut.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background: linear-gradient(
    90deg,
    rgba(234, 131, 14, 1) 0%,
    rgba(252, 202, 70, 1) 100%
  );
  display: grid;
  grid-template-columns: 3fr 1fr 3fr;
  grid-template-rows: 1fr;
  max-height: 40rem;
  min-height: 30rem;
  overflow: hidden;

  .left {
    align-items: center;
    color: black;
    display: flex;
    font-size: 6rem;
    grid-column: 1/3;
    grid-row: 1/2;
    padding: $padding-s;
    z-index: 10;
  }

  .right {
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
