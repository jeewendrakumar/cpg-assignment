import { createApp } from 'vue'
import App from './App.vue'

import store from './store/store.js';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App)
app.use(store);
app.mount('#app')
