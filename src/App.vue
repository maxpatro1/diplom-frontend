<template>
  <div class="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import { LAYOUTS_NAMES } from '@/utils/constants';
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import CoursesLayout from '@/layouts/CoursesLayout.vue';
import LabLayout from '@/layouts/LabLayout.vue';

export default {
  name: 'App',
  components: {
    [LAYOUTS_NAMES.EMPTY_LAYOUT]: EmptyLayout,
    [LAYOUTS_NAMES.AUTH_LAYOUT]: AuthLayout,
    [LAYOUTS_NAMES.COURSES_LAYOUT]: CoursesLayout,
    [LAYOUTS_NAMES.LAB_LAYOUT]: LabLayout,
  },
  computed: {
    layout() {
      const { layout } = this.$route.meta;
      return layout || LAYOUTS_NAMES.EMPTY_LAYOUT;
    },
  },
};
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
}
</style>
