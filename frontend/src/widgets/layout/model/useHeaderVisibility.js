import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export function useHeaderVisibility() {
    const showHeader = ref(true)
    const router = useRouter()
    const updateHeaderVisibility = () => {
        const currentPath = router.currentRoute.value.path
        showHeader.value = !(
            currentPath.startsWith('/edit/') ||
            currentPath === '/create' ||
            currentPath === '/login' ||
            currentPath === '/register'
        )
    }

    watch(() => router.currentRoute.value.path, updateHeaderVisibility, {
        immediate: true,
    })

    return { showHeader }
}