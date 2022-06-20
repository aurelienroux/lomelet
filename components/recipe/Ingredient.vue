<template>
  <div class="ingredient">
    <label>
      <input v-model="checked" type="checkbox" />
      <span class="checkmark"></span>
    </label>
    <div :class="{ checked: checked }" @click="toggleCheck">
      <span class="numbers">
        {{ portionFormat }}
      </span>
      <span v-if="ing.unit !== 'unite'">
        {{ ing.unit }}
      </span>
      {{ ing.name }}<span v-if="pluralIng">s</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    ing: {
      type: Object,
      default: () => {},
    },
    portion: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      checked: false,
    }
  },
  computed: {
    pluralIng() {
      return this.ing.unit === 'unite' && this.portion > 1
    },
    portionFormat() {
      const portion = this.portion
      return portion - Math.floor(portion) !== 0 ? portion.toFixed(2) : portion
    },
  },
  methods: {
    toggleCheck() {
      this.checked = !this.checked
    },
  },
}
</script>

<style lang="scss" scoped>
.ingredient {
  display: flex;
  padding: 1rem 0;
  cursor: pointer;
}

.numbers {
  color: $color-tangerine;
  font-weight: 700;
}

label {
  font-size: 1.4rem;
  padding-left: 4rem;
  position: relative;
  top: 0.1rem;
  text-transform: capitalize;
  user-select: none;

  & input {
    cursor: pointer;
    height: 0;
    opacity: 0;
    position: absolute;
    width: 0;
  }

  .fa {
    margin-left: 0.4rem;
  }

  .checkmark {
    background-color: lighten($color-tangerine, $amount: 35);
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
    border: solid $color-white;
    border-width: 0 0.3rem 0.3rem 0;
    height: 1rem;
    left: 1rem;
    top: 0.7rem;
    transform: rotate(45deg);
    width: 0.5rem;
  }
}

.checked {
  text-decoration: line-through;
}
</style>
