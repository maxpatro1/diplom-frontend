<template>
  <div class="layout">
    <header-main />
    <main class="main">
      <div class="base-container">
        <slot></slot>
      </div>
    </main>
    <lab-footer />
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue';
import LabFooter from '@/components/LabFooter.vue';

export default {
  name: 'LabLayout',
  components: {
    HeaderMain,
    LabFooter,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .main {
    flex-grow: 1;
  }
}
</style>
