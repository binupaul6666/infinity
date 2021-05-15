import { createRouter, createWebHistory } from 'vue-router';
import Index from '../core/login/index';
import Welcome from '../core/welcome/index';


const routes = [{
    path: "/login",
    component: Index,
}, {
    path: "/welcome",
    component: Welcome,
}
];
const router = createRouter({ history: createWebHistory(), routes })

export default router