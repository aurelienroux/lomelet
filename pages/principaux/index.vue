<template>
  <div>
    <CatHero title="Plats principaux" />
    <Filters @updateCategories="updateCategories" />
    <p v-if="noRecipes" class="glob-container no-recipes">
      Aucune recette ne correspond à vos critères. Veuillez recommencer.
    </p>
    <div v-else class="glob-container container">
      <Recipe
        v-for="(recipe, index) in filteredRecipes"
        :key="index"
        :recipe="recipe"
        category="principaux"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const recipes = await $content('principaux').fetch()
    return { recipes }
  },
  data() {
    return {
      selectedCategories: ['tout'],
    }
  },
  computed: {
    noRecipes() {
      return this.filteredRecipes.length === 0
    },
    filteredRecipes() {
      const selectedCategories = this.selectedCategories

      if (selectedCategories.includes('tout')) {
        return this.recipes
      } else {
        return this.recipes.filter((recipe) => {
          let matchFilter = false

          selectedCategories.forEach((category) => {
            if (recipe.cat[category] === true) {
              matchFilter = true
            }
          })
          return matchFilter
        })
      }
    },
  },
  methods: {
    updateCategories(categories) {
      this.selectedCategories = categories
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: $padding-s;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}

.no-recipes {
  font-size: 1.6rem;
  line-height: 1.4;
}
</style>
