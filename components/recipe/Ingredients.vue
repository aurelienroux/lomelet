<template>
  <div class="glob-container">
    <div>
      pour {{ portionQty }} personne<span v-if="portionQty > 1">s</span>
    </div>
    <button @click="portionQty++">+</button>
    <button :disabled="portionQty < 2" @click="portionQty--">-</button>
    <div v-for="(ingredient, index) in ingredients" :key="index">
      {{ (ingredient.qty / qty) * portionQty }}
      {{ ingredient.unit }}
      {{ ingredient.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qty: {
      type: Number,
      default: 0,
    },
    ingredients: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      portionQty: 1,
    }
  },
}
</script>

<style lang="scss" scoped></style>
