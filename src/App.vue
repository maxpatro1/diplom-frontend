<template>
  <div>
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import CoursesLayout from '@/layouts/CoursesLayout.vue';

export default {
  name: 'App',
  components: {
    EmptyLayout,
    AuthLayout,
    CoursesLayout,
  },
  computed: {
    layout() {
      const { layout } = this.$route.meta;
      return layout || 'empty-layout';
    },
  },
};
</script>
