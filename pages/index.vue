<template>
  <div>
    <MainHero />
    <div class="container">
      <CatLink category="principaux" />
      <CatLink category="desserts" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: 4rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  padding: 4rem;
}
</style>
