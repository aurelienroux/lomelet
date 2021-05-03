<template>
  <div>
    <MainHero />
    <div class="glob-container container">
      <!-- <CatLink category="dejeuners" /> -->
      <CatLink category="principaux" />
      <CatLink category="a-cotes" />
      <CatLink category="tofu" />
      <CatLink category="desserts" />
      <CatLink category="smoothies" />
      <CatLink category="sauces" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: $padding-s;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}
</style>
