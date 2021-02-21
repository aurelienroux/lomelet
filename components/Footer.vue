<template>
  <footer>
    ©
    <a href="http://aroux.dev" target="_blank" rel="noopener noreferrer">
      Aroux
    </a>
    |
    {{ new Date().getFullYear() }}
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: $color-bg-gradient;
  bottom: 0;
  color: $color-white;
  font-size: 1.2rem;
  padding: 0.7rem;
  position: fixed;
  text-align: center;
  width: 100%;

  a {
    color: $color-white;
  }
}
</style>
