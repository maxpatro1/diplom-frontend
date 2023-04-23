<template>
  <router-link class="course" to="/">
    <base-round-number-loader :process="process" :size="48" class="course__load" />
    <img class="course__img" src="@/assets/images/mock/course-image.png" alt="course">
    <div class="course__body">
      <p class="course__title">Электродинамика</p>
      <p class="course__subtitle">12 тем</p>
    </div>
  </router-link>
</template>

<script>
import BaseRoundNumberLoader from '@/components/base/BaseRoundNumberLoader.vue';

export default {
  name: 'CoursesListItem',
  components: {
    BaseRoundNumberLoader,
  },
  data() {
    return {
      process: 75,
    };
  },
};
</script>

<style lang="scss" scoped>
.course {
  display: block;
  position: relative;
  background-color: #fff;
  border: 1px solid $traffic-gray;
  border-radius: 16px;
  transition: $transition-md;

  &:hover {
    background-color: $honey-dew;
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.1));
  }

  &__load {
    position: absolute;
    top: 16px;
    right: 16px;
  }

  &__img {
    width: 100%;
  }

  &__body {
    padding: 16px;
  }

  &__title {
    font-weight: 600;
    margin-bottom: 8px;
  }

  &__subtitle {
    font-size: 12px;
    line-height: 16px;
    color: $traffic-gray;
  }
}
</style>
