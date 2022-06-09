import './bootstrap';
import { createApp } from 'vue';
// import the root component App from a single-file component.
import App from './vue/App';

import router from "./vue/router";
import About from "./vue/pages/About.vue";


createApp(App)
.component("about",About)
.use(router)

.mount('#app')
