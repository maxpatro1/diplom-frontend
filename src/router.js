import Vue from 'vue';
import VueRouter from 'vue-router';
import Authorization from "./components/auth/Authorization";
import StudentMain from "./components/student/StudentMain";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
      { path: '/', component:  Authorization},
      { path: '/student/courses', component:  StudentMain}
  ]})

export default router;
