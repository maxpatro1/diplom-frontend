<template>
  <lab-workplace class="workplace">
    <div class="device">
      <h1 class="device__title">{{ labData.title }}</h1>
      <lab-bread-crumbs :breadCrumbs="breadCrumbs" />
    </div>
    <div class="toolbar">toolbar</div>
  </lab-workplace>
</template>

<script>
import LabWorkplace from '@/components/hoc/LabWorkplace.vue';
import LabBreadCrumbs from '@/components/lab/LabBreadCrumbs.vue';

export default {
  name: 'LabView',
  components: {
    LabWorkplace,
    LabBreadCrumbs,
  },
  data() {
    return {
      labData: {
        title: 'Лабораторная работа №2',
      },
      breadCrumbs: [
        { title: 'Список курсов', link: '/' },
        { title: 'ТмиЭЭлТ', link: '/' },
        { title: 'Лабораторная работа №1', link: '/' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.workplace {
  padding: 24px 0;
}

.device__title {
  font-size: 24px;
  line-height: 32px;
  font-weight: 600;
  margin-bottom: 8px;
}
</style>
