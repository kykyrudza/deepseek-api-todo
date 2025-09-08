import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/', component: () => import('@/pages/home/index.vue') }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
