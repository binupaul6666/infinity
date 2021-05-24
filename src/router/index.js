import { createRouter, createWebHistory } from 'vue-router';
import Index from '../core/login/index';
import Welcome from '../core/welcome/index';
import store from '@/store'


const routes = [{
    path: "/login",
    name: 'login',
    component: Index,
}, {
    path: "/welcome",
    name: 'welcome',
    component: Welcome,
}, {
    path: "/",
    name: 'layout',
    component: () => import(/* webpackPrefetch: true */
        /* webpackPreload: true */ /* webpackChunkName: 'layout' */ '../components/layout/index'),
    beforeEnter: (to, from, next) => {
        if (to.name !== 'login' && store.isAuthenticated) {
            next()
        } else {
            next({ path: '/login' })
        }

    },
    children: [
        {
            path: "/members",
            name: 'member',
            component: () => import(/* webpackPrefetch: true */
                    /* webpackPreload: true */ /* webpackChunkName: 'member' */ '../components/members/index'),
        },
        {
            path: "/dashboard",
            name: 'dashboard',
            component: () => import(/* webpackPrefetch: true */
                /* webpackPreload: true */ /* webpackChunkName: 'dashboard' */ '../components/dashboard/index')
        }
    ]
}
];
const router = createRouter({ history: createWebHistory(), routes });
export default router