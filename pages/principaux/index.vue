<template>
  <div>
    <CatHero title="Plats principaux" />
    <div class="glob-container filters">
      <label v-for="(checkbox, index) in categories" :key="index">
        <input v-model="selectedCategories" type="checkbox" :value="checkbox" />
        {{ checkbox }}
      </label>
      <p v-if="noRecipes" class="no-recipes">
        Aucune recette ne correspond à vos critères. Veuillez recommencer.
      </p>
    </div>

    <div class="glob-container container">
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
      categories: ['tout', 'thermomix', 'vegetarien', 'vegan'],
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
}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  gap: $padding-s;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
}

.filters {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

label {
  display: block;
  font-size: 1.6rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.no-recipes {
  font-size: 1.6rem;
  line-height: 1.4;
}
</style>
