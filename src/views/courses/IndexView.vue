<template>
  <div class="courses-view">
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
.courses-view {
  display: grid;
  grid-template-columns: auto;
  gap: 24px;
  padding-bottom: 56px;
}
</style>
