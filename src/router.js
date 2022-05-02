import Vue from 'vue';
import VueRouter from 'vue-router';
import Authorization from "./components/auth/Authorization";
import StudentMain from "./components/student/courses/StudentMain";
import LabList from "./components/student/labs/LabList";
import FirstLab from "./components/student/labs/FirstLab/FirstLab";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/', component:  Authorization },
      { path: '/student/courses', component:  StudentMain },
      { path: '/student/course/:id/labs', component: LabList },
      { path: '/student/course/2/lab/1', component: FirstLab}
  ]})

export default router;
