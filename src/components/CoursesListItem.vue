<template>
  <router-link class="course" to="/">
    <img class="course__img" src="@/assets/images/mock/course-image.png" alt="course">
    <div class="course__body">
      <p class="course__title">Электродинамика</p>
      <p class="course__subtitle">12 тем</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'CoursesListItem'
};
</script>

<style lang="scss" scoped>
.course {
  display: block;
  background-color: #fff;
  border: 1px solid $traffic-gray;
  border-radius: 16px;
  transition: $transition-md;

  &:hover {
    background-color: $honey-dew;
    filter: drop-shadow(0px 4px 2px rgba(0, 0, 0, 0.1));
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
