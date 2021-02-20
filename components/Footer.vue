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
  font-size: 1.6rem;
  padding: 0.7rem;
  text-align: center;
  width: 100%;
}
</style>
