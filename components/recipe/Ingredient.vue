<template>
  <div class="ingredient" @click="toggleCheck">
    <span v-if="checked" class="checked"></span>
    <span v-else class="non-checked"></span>
    <div>
      <span class="numbers">{{ portion }}</span>
      <span v-if="ing.unit !== 'unite'">{{ ing.unit }}</span>
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
  align-items: center;
  display: flex;
  padding: 0.8rem 0;
}

.checked,
.non-checked {
  border-radius: 100%;
  border: 0.2rem solid black;
  display: inline-block;
  height: 3rem;
  margin-right: 2rem;
  width: 3rem;
}

.checked {
  background: $color-tangerine;
}

.numbers {
  color: $color-tangerine;
  font-weight: 700;
}
</style>
