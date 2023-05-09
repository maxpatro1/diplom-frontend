<template>
  <div class="pipe">
    <div :style="fillerStyles" class="pipe__filler"></div>
  </div>
</template>

<script>

export default {
  name: 'LabPipe',
  props: {
    isFilled: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 50,
    },
  },
  data() {
    return {
      loading: false,
      fillingPercentage: 0,
      maxPercentage: 10,
      minPercentage: 0,
    };
  },
  computed: {
    fillerStyles() {
      const progress = (this.fillingPercentage / this.maxPercentage) * 100;
      return {
        width: `${progress}%`,
      };
    },
  },
  mounted() {
    if (this.isFilled) this.fillingPercentage = this.maxPercentage;
  },
  watch: {
    isFilled: {
      handler() {
        if (this.loading) return;

        this.changeFilling();
      },
      immediate: false,
    },
  },
  methods: {
    checkForTheEndInterval() {
      if (this.isFilled) {
        return this.fillingPercentage === this.maxPercentage;
      }

      return this.fillingPercentage === this.minPercentage;
    },
    changeFilling() {
      this.loading = true;
      const int = setInterval(() => {
        if (this.isFilled) {
          this.fillingPercentage += 1;
        } else {
          this.fillingPercentage -= 1;
        }

        if (this.checkForTheEndInterval()) {
          clearInterval(int);
          this.loading = false;
        }
      }, this.duration);
    },
  },
};
</script>

<style lang="scss" scoped>
.pipe {
  display: flex;
  height: 10px;
  width: 40px;
  background-color: $honey-dew;
  transition: $transition-md;

  &__filler {
    width: 0%;
    background-color: $dark-blue;
    transition: $transition-md;
  }
}
</style>
