<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import EmptyLayout from '@/layouts/EmptyLayout.vue';

export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    EmptyLayout,
  },
  computed: {
    layout() {
      const { layout } = this.$route.meta;
      return layout || 'empty-layout';
    },
  },
};
</script>
