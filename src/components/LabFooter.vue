<template>
  <footer class="footer">
    <div class="base-container footer__body">
      <lab-switcher v-model="isOnDevice" :label="switcherLabel" />
      <lab-start-stop-button v-model="isStarted" />
      <base-button class="footer__button">Завершить</base-button>
      <lab-back-button label="Журнал" />
    </div>
  </footer>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';
import LabBackButton from '@/components/lab/LabBackButton.vue';
import LabSwitcher from '@/components/lab/LabSwitcher.vue';
import LabStartStopButton from '@/components/lab/LabStartStopButton.vue';

export default {
  name: 'LabFooter',
  components: {
    BaseButton,
    LabBackButton,
    LabSwitcher,
    LabStartStopButton,
  },
  data() {
    return {
      isOnDevice: false,
      isStarted: false,
    };
  },
  computed: {
    startStopLabel() {
      return this.isStarted ? 'На паузу' : 'Запустить';
    },
    switcherLabel() {
      return this.isOnDevice ? 'Включено' : 'Выключено';
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.12), 0px 16px 16px rgba(0, 0, 0, 0.16);

  &__body {
    padding: 16px 0;
    display: grid;
    grid-template-columns: 200px 140px 1fr auto;
    align-items: center;
    gap: 40px;
  }

  &__button {
    width: 100%;
    max-width: 320px;
    margin-left: 13.5%;
  }
}
</style>
