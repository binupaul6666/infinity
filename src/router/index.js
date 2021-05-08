import { createRouter, createWebHistory } from 'vue-router';
import Index from '../core/login/index';

const routes = [{
    path: "/login",
    component: Index,
}
];
const router = createRouter({ history: createWebHistory(), routes })

export default router