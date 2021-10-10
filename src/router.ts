import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import Data from './components/Data.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/template', component: TemplateSyntax },
  { path: '/data', component: Data },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
