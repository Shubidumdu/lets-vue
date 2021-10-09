import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 모든 Vue 애플리케이션은 `createApp`을 통해 애플리케이션 인스턴스를 만드는데서부터 시작합니다.
const app = createApp(App);

// `use`를 통해, 흡사 expressJS를 사용하듯 플러그인을 적용할 수 있습니다.
app.use(router);

// mount를 통해 루트 컴포넌트를 설정하여 애플리케이션을 마운트합니다.
app.mount('#app');
