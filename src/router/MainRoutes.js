import {neededAuthentication} from '@/router/guards'

export default {
    path: '/',
    component: () => import('@/layouts/full/FullLayout.vue'),
    beforeEnter: neededAuthentication,
    children: [
        {
            name: 'dashboard',
            path: '/',
            component: () => import('@/views/dashboard/index.vue')
        },
        {
            name: 'motorCredito',
            path: '/motorCredito',
            component: () => import('@/views/custom/crediario/MotorCredito.vue')
        },
    ]
};