# 📐 Архитектура фронтенда (Vue 3 + Vite, FSD)

Мы используем **Feature-Sliced Design (FSD)**, чтобы проект был структурированным и масштабируемым.  
Все исходники хранятся в `src/`.

## 🗂 Структура



```

src/
├─ app/             # Инициализация приложения (точка входа)
│  ├─ index.js      # createApp, pinia, router, глобальные провайдеры
│  ├─ App.vue       # Корневой компонент
│  └─ providers/    # провайдеры (router.js, i18n.js, ...)
│
├─ pages/           # Страницы (routes)
│  └─ home/
│     └─ index.vue  # /home страница
│
├─ widgets/         # Крупные UI-блоки (layout, navbar, sidebar)
│  └─ layout/
│     └─ ui/Layout.vue
│
├─ features/        # Фичи (действия пользователя)
│  └─ notify/
│     ├─ lib/notify.js   # функция показа уведомлений
│     └─ model.js        # pinia store, если нужен
│
├─ entities/        # Бизнес-сущности (user, project, task...)
│  └─ user/
│     ├─ api.js     # API-методы (login, logout, profile)
│     └─ model.js   # store пользователя
│
├─ shared/          # Общие ресурсы (библиотеки, утилиты, дизайн-система)
│  ├─ api/          # http-клиент, CSRF, interceptors
│  │  ├─ http.js
│  │  └─ ensureCsrf.js
│  ├─ config/       # глобальные конфиги
│  │  └─ axios.js
│  ├─ lib/          # вспомогательные функции, константы, типы
│  │  └─ types.js
│  └─ ui/           # базовые UI-компоненты
│     └─ toast/
│        ├─ model.js
│        └─ ui/ToastHost.vue
│
└─ assets/          # глобальные стили, картинки, иконки
      ├─ styles/
      │  └─ tailwind.css
      ├─ images/
      ├─ icons/
      └─ fonts/
```


## 🔑 Слои

- **app/**  
  Точка входа. Здесь нет бизнес-логики. Только настройка (`createApp`, роутер, Pinia, глобальные стили).

- **pages/**  
  Роуты (страницы). Состоят из `widgets`, `features`, `entities`, `shared`.  
  ❌ Страницы не содержат бизнес-логики. Только компоновка.

- **widgets/**  
  Крупные блоки UI (Layout, Header, Sidebar).  
  Могут включать в себя несколько `features` или `entities`.

- **features/**  
  Завершённое действие пользователя (login, notify, add-to-cart).  
  Содержит свою API-логику, UI и store.  
  Локальные ассеты (например, картинка для формы логина) кладём прямо в `features/auth/assets/`.

- **entities/**  
  Бизнес-сущности (User, Project, Task).  
  Здесь живут API-методы, stores и простые UI-компоненты, связанные с сущностью.

- **shared/**  
  Всё переиспользуемое: http-клиент, утилиты, дизайн-система, базовые компоненты (Button, Input, Toast).  
  ❗ Здесь не должно быть бизнес-логики.

- **assets/**  
  Глобальные стили, картинки, шрифты.  
  Если ассет нужен только в одной фиче/странице → клади рядом, а не сюда.

---

## 📦 Алиасы

В `vite.config.js` настроен алиас `@ → src/`.  
Можно импортировать так:
```js
import { http } from '@/shared/api/http'
import ToastHost from '@/shared/ui/toast/ui/ToastHost.vue'
````

---

## 🚦 Поток данных (пример)

1. Пользователь кликает "Login" → компонент из `features/auth/ui/LoginForm.vue`.
2. Фича вызывает `entities/user/api.js` → запрос через `shared/api/http.js`.
3. Ответ перехватывается в `http.js` (интерсептор). Если есть `message`, то через `features/notify` показывается тост.
4. Store пользователя (`entities/user/model.js`) обновляется.
5. Страница (`pages/home/index.vue`) рендерит изменения.

---

## 📝 Правила

* ❌ Не импортировать из верхнего слоя в нижний (например, `features` не должны импортить `pages`).
* ✅ Допустимые импорты:

    * pages → widgets, features, entities, shared
    * widgets → features, entities, shared
    * features → entities, shared
    * entities → shared
    * shared → только внутри shared
* ❌ Не клади бизнес-логику в `app/`, `pages/`, `shared/`.
* ✅ Локальные ассеты — рядом с компонентом/фичей.

---