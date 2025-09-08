<template>
  <div class="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 p-8 bg-layout rounded-2xl shadow-xl">
      <div>
        <div class="flex justify-center">
          <div class="rounded-full p-4 bg-layout bg-opacity-10">
            <UserRound class="size-10 text-white"/>
          </div>
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold text-white">
          Вход в аккаунт
        </h2>
        <p class="mt-3 text-center text-sm text-gray-600">
          Или
          <a href="#" class="font-medium text-[#a89cf2] hover:text-opacity-80 transition-colors">
            создайте новый аккаунт
          </a>
        </p>
      </div>
      <form class=" space-y-6" @submit.prevent="handleLogin">
        <div class="rounded-md shadow-sm -space-y-px">
          <div class="pb-4">
            <label for="email-address" class="sr-only">Email адрес</label>
            <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none focus:ring-2 transition-all rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-[#050505] focus:outline-none focus:ring-[#a89cf2] focus:border-[#a89cf2] focus:z-10 sm:text-sm"
                placeholder="Email адрес"
                v-model="form.email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Пароль</label>
            <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none focus:ring-2 transition-all rounded-md relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-[#050505] focus:outline-none focus:ring-[#a89cf2] focus:border-[#a89cf2] focus:z-10 sm:text-sm"
                placeholder="Пароль"
                v-model="form.password"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-[#a89cf2] focus:ring-[#a89cf2] border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-[#a89cf2]">
              Запомнить меня
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-[#a89cf2] hover:text-opacity-80 transition-colors">
              Забыли пароль?
            </a>
          </div>
        </div>

        <div>
          <button
              type="submit"
              class="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#a89cf2] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a89cf2] transition-colors"
              :class="{'opacity-75 cursor-not-allowed': loading}"
              :disabled="loading"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockKeyhole class="size-5"/>
            </span>
            {{ loading ? 'Вход...' : 'Войти' }}
          </button>
        </div>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Или войдите с помощью
              </span>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-3">
            <div>
              <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <span class="sr-only">Войти с помощью Google</span>
                <svg class="w-5 h-5" aria-hidden="true"  viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-.001 1.094-.118 1.562-.323a4.92 4.92 0 0 1-1.119 1.919c-.697-.205-1.316-.56-1.807-1.028.273-.379.617-.699 1.011-.94-.632-.722-1.019-1.666-1.019-2.678 0-.553.119-1.077.333-1.556a4.92 4.92 0 0 1 1.119 1.919 3.7 3.7 0 0 0-1.562-.323c-1.333 0-2.416 1.099-2.416 2.458 0 1.359 1.083 2.458 2.416 2.458zm6.04-2.458c0 1.359-1.083 2.458-2.416 2.458-.564 0-1.094-.118-1.562-.323a4.92 4.92 0 0 0 1.119 1.919c.697-.205 1.316-.56 1.807-1.028a3.62 3.62 0 0 1-1.011-.94c.632-.722 1.019-1.666 1.019-2.678 0-.553-.119-1.077-.333-1.556a4.92 4.92 0 0 0-1.119 1.919c.468-.205.998-.323 1.562-.323 1.333 0 2.416 1.099 2.416 2.458z"/>
                </svg>
              </a>
            </div>

            <div>
              <a href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 transition-colors">
                <span class="sr-only">Войти с помощью Facebook</span>
                <svg class="w-5 h-5" aria-hidden="true"  viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserRound, LockKeyhole } from 'lucide-vue-next';

const router = useRouter()
const loading = ref(false)

const form = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  loading.value = true

  // Имитация запроса на сервер
  setTimeout(() => {
    loading.value = false
    router.push('/dashboard') // Перенаправление после успешного входа
  }, 1500)
}
</script>

<style scoped>
/* Дополнительные стили для плавности */
input:focus {
  transition: all 0.3s ease;
}
</style>