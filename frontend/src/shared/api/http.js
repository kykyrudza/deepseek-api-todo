import axios from 'axios'
import { AXIOS_BASE_URL, WITH_CREDENTIALS } from '@/shared/config/axios'
import { setActivePinia } from 'pinia'
import { useToastStore } from '@/shared/ui/toast/model'

export const http = axios.create({
    baseURL: AXIOS_BASE_URL,
    withCredentials: WITH_CREDENTIALS
})

// ленивый доступ к тост-стору (после initHttp)
function notify(message, status = 'info') {
    if (!message || typeof message !== 'string' || !message.trim()) return
    try {
        const toast = useToastStore()
        toast.push(message.trim(), status)
    } catch {
        // если pinia ещё не активна — молча игнорируем
    }
}

// проверяем формат ответа { status, message?, data? }
function isEnvelope(d) {
    return d && typeof d === 'object' && typeof d.status === 'string'
}

function showIfMessage(status, message) {
    notify(message, status || 'info')
}

/**
 * Инициализация интерсепторов
 * вызывать ОДИН раз после app.use(pinia)
 */
export function initHttp(piniaInstance) {
    setActivePinia(piniaInstance)

    http.interceptors.response.use(
        (response) => {
            const d = response.data
            if (isEnvelope(d)) showIfMessage(d.status, d.message)
            return response
        },
        (error) => {
            const res = error.response
            let msg, status

            if (res && res.data) {
                const data = res.data
                if (isEnvelope(data)) {
                    status = data.status
                    msg = data.message
                } else if (typeof data?.message === 'string') {
                    status = 'error'
                    msg = data.message
                } else if (typeof data === 'string') {
                    status = 'error'
                    msg = data
                }
            }

            // Laravel 422 validation errors
            if (!msg && res?.status === 422) {
                const errs = res.data?.errors
                if (errs && typeof errs === 'object') {
                    const first = Object.values(errs).flat()?.[0]
                    if (typeof first === 'string') msg = first
                }
                status = 'error'
            }

            showIfMessage(status || 'error', msg)
            return Promise.reject(error)
        }
    )
}
