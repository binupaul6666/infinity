import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';
import mitt from 'mitt';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ToastService from 'primevue/toastservice';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '@/css/style.scss';

library.add(faStar);

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.emitter = emitter;
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).use(PrimeVue).use(ToastService).mount('#app');
