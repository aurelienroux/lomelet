<template>
  <nuxt-link :to="recipeUrl" class="recipe-link">
    <div v-if="recipe.picture" class="image">
      <img :src="recipe.picture" :alt="recipe.title" loading="lazy" />
    </div>
    <div class="content">
      <h2>{{ recipe.title }}</h2>
      <div class="infos">
        <div v-if="recipe.time" class="time">
          <fa class="fa" :icon="['fas', 'clock']" />
          <span>{{ recipe.time }}</span>
        </div>
        <fa
          v-if="recipe.cat.vegetarien"
          class="fa fa-right"
          :icon="['fas', 'carrot']"
        />
        <fa v-if="recipe.cat.vegan" class="fa" :icon="['fas', 'leaf']" />
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: '',
    },
    recipe: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    recipeUrl() {
      return `${this.category}/${this.recipe.slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
.recipe-link {
  border-radius: 1rem;
  box-shadow: $color-neumorphism;
  display: flex;

  .image {
    flex: 1;
  }

  img {
    border-radius: 1rem 0 0 1rem;
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  .content {
    color: $color-black;
    display: flex;
    flex-direction: column;
    flex: 2;

    h2 {
      flex: 1;
      font-size: 1.8rem;
      margin-bottom: 1rem;
      padding: 2rem;
    }

    .infos {
      align-items: center;
      background: $color-bg-gradient;
      border-radius: 0 0 1rem 0;
      color: $color-white;
      display: flex;
      font-size: 1rem;
      padding: 1rem 2rem;

      .fa {
        color: $color-white;
      }
    }

    .time {
      align-items: center;
      display: flex;
      margin-right: 1.6rem;
      position: relative;
      top: 0.1rem;

      .fa {
        margin-right: 0.3rem;
      }
    }

    .fa-right {
      margin-right: 1.6rem;
    }
  }
}
</style>
