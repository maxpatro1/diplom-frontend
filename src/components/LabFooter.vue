<template>
  <footer class="footer">
    <div class="base-container footer__body">
      <base-button class="footer__button">Завершить</base-button>
    </div>
  </footer>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';

export default {
  name: 'LabFooter',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16);

  &__body {
    padding: 16px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__button {
    width: 100%;
    max-width: 320px;
  }
}
</style>
