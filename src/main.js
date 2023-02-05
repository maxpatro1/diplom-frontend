import { createApp } from 'vue';
import { svgSpritePlugin } from 'vue-svg-sprite';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/styles/main.scss';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(svgSpritePlugin, {
  url: require('@/assets/icons/icons.svg')
});

app.mount('#app');
