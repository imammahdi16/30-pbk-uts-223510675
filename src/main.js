import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { Quasar, QBtn, QInput, QSelect, QList, QItem, QItemSection, QCheckbox } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass';

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(Quasar, {
  components: {
    QBtn,
    QInput,
    QSelect,
    QList,
    QItem,
    QItemSection,
    QCheckbox
  }
});
app.mount('#app');
