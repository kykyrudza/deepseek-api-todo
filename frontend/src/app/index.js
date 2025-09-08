import { createApp as createVueApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './providers/router'
import { initHttp } from '@/shared/api/http'

export function createApp() {
    const app = createVueApp(App)
    const pinia = createPinia()
    app.use(pinia)
    app.use(router)
    initHttp()
    return app
}
