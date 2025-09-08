import { http } from './http'
export async function ensureCsrf() {
    await http.get('/sanctum/csrf-cookie')
}
