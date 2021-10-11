import { createRouter, createWebHashHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import TemplateSyntax from './components/TemplateSyntax.vue';
import Data from './components/Data.vue';
import Computed from './components/Computed.vue';
import StyleBinding from './components/StyleBinding.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/template', component: TemplateSyntax },
  { path: '/data', component: Data },
  { path: '/computed', component: Computed },
  { path: '/style-binding', component: StyleBinding },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
