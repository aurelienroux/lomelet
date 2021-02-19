<template>
  <div>
    <MainHero />
    <div class="glob-container container">
      <CatLink category="principaux" />
      <CatLink category="desserts" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
}
</style>
