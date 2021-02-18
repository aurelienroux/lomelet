<template>
  <div>
    <h1>{{ recipe.title }}</h1>

    <input id="" v-model="portionQty" type="number" />

    <div>
      pour {{ portionQty }} personne<span v-if="portionQty > 1">s</span>
    </div>

    <div v-for="(ingredient, index) in recipe.ingredients" :key="index">
      quantite: {{ (ingredient.qty / recipe.qty) * portionQty }}
      {{ ingredient.unit }}
      {{ ingredient.name }}
    </div>

    <div>
      par portion
      {{ recipe.macros }}
    </div>

    <img :src="recipe.picture" alt="" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const recipe = await $content('principaux', params.slug).fetch()

    return { recipe }
  },
  data() {
    return {
      portionQty: 1,
    }
  },
}
</script>
