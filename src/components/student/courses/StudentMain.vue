<template>
  <div>
    <CustomHeader/>
    <courses-list/>
  </div>

</template>

<script>
import CoursesList from "./CoursesList";
import CustomHeader from "../CustomHeader";
export default {
  name: "StudentMain",
  components: {CustomHeader, CoursesList}
}
</script>

<style scoped>
 .header-height{
   height: 50px;
 }
</style>