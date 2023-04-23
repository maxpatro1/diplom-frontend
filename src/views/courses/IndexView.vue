<template>
  <div class="courses">
    <h1 class="courses__title">Список курсов</h1>
    <courses-header />
    <courses-list />
    <courses-footer />
  </div>
</template>

<script>
import CoursesList from '@/components/CoursesList.vue';
import CoursesHeader from '@/components/CoursesHeader.vue';
import CoursesFooter from '@/components/CoursesFooter.vue';

export default {
  name: 'CoursesView',
  components: {
    CoursesList,
    CoursesHeader,
    CoursesFooter
}
};
</script>

<style lang="scss" scoped>
.courses {
  display: grid;
  grid-template-columns: auto;
  gap: 24px;
  padding-top: 24px;
  padding-bottom: 56px;

  &__title {
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
  }
}
</style>
