const AuthView = () => import('@/views/AuthView.vue');
const CoursesView = () => import('@/views/courses/IndexView.vue');
const CourseView = () => import('@/views/courses/CourseView.vue');
const LabListView = () => import('@/views/courses/labs/IndexView.vue');
const LabView = () => import('@/views/courses/labs/LabView.vue');

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView,
    meta: {
    //   title: 'Авторизация',
      layout: 'auth-layout',
    //   requiresAuth: false,
    },
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView,
    meta: {
      layout: 'courses-layout',
    }
  },
  {
    path: '/courses/:courseId', // unused page
    name: 'course',
    component: CourseView,
  },
  {
    path: '/courses/:courseId/labs',
    name: 'labList',
    component: LabListView,
  },
  {
    path: '/courses/:courseId/labs/:labId',
    name: 'lab',
    component: LabView,
  },
];

export default routes;
