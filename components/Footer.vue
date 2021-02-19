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
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 0.7rem;
}
</style>
