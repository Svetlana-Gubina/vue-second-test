import { createApp } from 'vue';
import App from './App.vue';
import ui from './ui';
// import router from './router'
// import store from './store'

const app = createApp(App);
ui.forEach((element) => {
  app.component(element.name, element);
});
app.mount('#app');
