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
  border-radius: 1rem;
  box-shadow: $color-neumorphism;
  font-size: 1.4rem;
  margin: 0 2rem 2rem;
  padding: 1rem;
  text-align: center;

  a {
    color: $color-tangerine;
    font-weight: 700;
  }
}
</style>
