import { useToastStore } from '@/shared/ui/toast/model'

export function notify(message, status = 'info') {
    const toast = useToastStore()
    toast.push(message, status)
}
