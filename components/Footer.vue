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
  border: 1px solid;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.7rem;
  z-index: 10;
  background: white;
}
</style>
