<template>
  <lab-workplace>
    <div class="device">
      device
      <lab-button disabled title="Давление в камере">ФВЧ</lab-button>
    </div>
    <div class="toolbar">toolbar</div>
  </lab-workplace>
</template>

<script>
import LabWorkplace from '@/components/hoc/LabWorkplace.vue';
import LabButton from '@/components/lab/LabButton.vue';

export default {
  name: 'LabView',
  components: {
    LabWorkplace,
    LabButton,
  },
};
</script>
