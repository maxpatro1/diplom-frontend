<template>
  <div>
    <header class="header-color header-height">
      <div class="d-flex justify-content-between">
        <div>
          <b-navbar-brand class="mx-5">c o u r s e s</b-navbar-brand>
        </div>
        <div class="mx-3">
          <span>{{$store.getters.user.last_name}} {{$store.getters.user.first_name}}</span>
          <p class="text-muted"><small>{{$store.getters.user.email}}</small></p>
        </div>
      </div>
    </header>
    <courses-list/>
  </div>

</template>

<script>
import CoursesList from "./CoursesList";
export default {
  name: "StudentMain",
  components: {CoursesList}
}
</script>

<style scoped>
 .header-height{
   height: 50px;
 }
</style>