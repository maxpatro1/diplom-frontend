<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

export default {
  name: 'App',
  components: {
    EmptyLayout,
    AuthLayout,
  },
  computed: {
    layout() {
      const { layout } = this.$route.meta;
      return layout || 'empty-layout';
    },
  },
};
</script>
