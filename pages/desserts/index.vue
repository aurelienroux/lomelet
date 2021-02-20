<template>
  <div>
    <CatHero title="Desserts" />
    <div class="glob-container filters">
      <label v-for="(checkbox, index) in categories" :key="index">
        <input v-model="selectedCategories" type="checkbox" :value="checkbox" />
        <span class="checkmark"></span>
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
        category="desserts"
      />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const recipes = await $content('desserts').fetch()
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
  cursor: pointer;
  display: block;
  font-size: 1.6rem;
  margin-bottom: 2rem;
  padding-left: 3.5rem;
  position: relative;
  text-transform: capitalize;
  user-select: none;

  & input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .checkmark {
    background-color: $color-gray;
    height: 2.5rem;
    left: 0;
    position: absolute;
    top: -0.3rem;
    width: 2.5rem;
  }

  input:checked ~ .checkmark {
    background-color: $color-tangerine;
  }

  .checkmark:after {
    content: '';
    display: none;
    position: absolute;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 1rem;
    top: 0.7rem;
    width: 0.5rem;
    height: 1rem;
    border: solid $color-white;
    border-width: 0 0.3rem 0.3rem 0;
    transform: rotate(45deg);
  }
}

.no-recipes {
  font-size: 1.6rem;
  line-height: 1.4;
}
</style>
