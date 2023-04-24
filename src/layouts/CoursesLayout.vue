<template>
  <div>
    <header-main />
    <main class="main">
      <div class="base-container">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue';

export default {
  name: 'CoursesLayout',
  components: {
    HeaderMain,
  },
};
</script>

<style lang="scss" scoped>
</style>
