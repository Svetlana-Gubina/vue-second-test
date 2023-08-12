import { createApp } from 'vue';
import App from './App.vue';
import ui from './ui';
// import router from './router'
// import store from './store'

const app = createApp(App);
// console.log(ui.forEach((element) => element));
ui.forEach((element) => {
  app.component(element.name, element);
});
app.mount('#app');
