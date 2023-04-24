<template>
  <div class="courses-footer">
    <base-button isLong color="light">Показать еще</base-button>
  </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';

export default {
  name: 'CoursesFooter',
  components: {
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
.courses-footer {
  padding: 8px;
}
</style>
