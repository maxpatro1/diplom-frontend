<template>
  <div class="courses-view">
    <div class="wrapper">
      <base-title class="courses-view__title">Предметы</base-title>
    </div>
    <courses-list />
  </div>
</template>

<script>
import BaseTitle from '@/components/base/BaseTitle.vue';
import CoursesList from '@/components/CoursesList.vue';

export default {
  name: 'CoursesView',
  components: {
    BaseTitle,
    CoursesList,
  }
};
</script>

<style lang="scss" scoped>
.courses-view {
  padding: 0 20px;

  .wrapper {
    width: 100%;
    max-width: $max-page-width;
    margin: 0 auto;
    padding-top: 33px;
  }

  &__title {
    margin-bottom: 19px;
  }
}
</style>
