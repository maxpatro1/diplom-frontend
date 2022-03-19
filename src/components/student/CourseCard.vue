<template>
  <b-card no-body>
    <div class="px-3 pb-3">
      <div class="float-end">
        <span class="badge alert-success">Active</span>
      </div>
      <b-card-img class="my-2" src="https://placekitten.com/1000/300"/>
      <h5><b>{{course.name}}</b></h5>
      <b-card-text class="text-muted">
        <small>{{ course.description }}</small>
      </b-card-text>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "CourseCard",
  props: ['course']
}
</script>

<style scoped>
  card-body {
    padding-top: 0;
  }
</style>