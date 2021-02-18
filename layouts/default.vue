<template>
  <div>
    <div>
      <nuxt-link to="/">accueil</nuxt-link>
      <nuxt-link to="/principaux">plats principaux</nuxt-link>
      <nuxt-link to="/desserts">desserts</nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<style>
html {
  -moz-osx-font-smoothing: grayscale;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  font-family: Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
