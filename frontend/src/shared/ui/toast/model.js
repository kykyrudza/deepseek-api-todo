import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
    state: () => ({ items: [], seq: 0 }),
    actions: {
        push(message, type = 'info', ttlMs = 3500) {
            const id = ++this.seq
            this.items.push({ id, message, type })
            if (ttlMs > 0) setTimeout(() => this.remove(id), ttlMs)
        },
        remove(id) {
            this.items = this.items.filter(t => t.id !== id)
        },
        clear() { this.items = [] }
    }
})
