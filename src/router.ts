import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/template', component: TemplateSyntax },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
