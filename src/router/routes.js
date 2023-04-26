import { LAYOUTS_NAMES } from '@/utils/constants';

const AuthView = () => import('@/views/AuthView.vue');
const RegistrationView = () => import('@/views/RegistrationView.vue');
const CoursesView = () => import('@/views/courses/IndexView.vue');
const CourseView = () => import('@/views/courses/_courseId/IndexView.vue');
const LabListView = () => import('@/views/courses/_courseId/labs/IndexView.vue');
const LabView = () => import('@/views/courses/_courseId/labs/_labId/IndexView.vue');

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView,
    meta: {
    //   title: 'Авторизация',
      layout: LAYOUTS_NAMES.AUTH_LAYOUT,
    //   requiresAuth: false,
    },
  },
  {
    path: '/registration',
    name: 'registration',
    component: RegistrationView,
    meta: {
      layout: LAYOUTS_NAMES.AUTH_LAYOUT,
    },
  },
  {
    path: '/courses',
    name: 'courses',
    component: CoursesView,
    meta: {
      layout: LAYOUTS_NAMES.COURSES_LAYOUT,
    },
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
    meta: {
      layout: LAYOUTS_NAMES.LAB_LAYOUT,
    },
  },
];

export default routes;
