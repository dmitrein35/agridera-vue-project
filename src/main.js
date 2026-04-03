import { createApp } from 'vue'
import { createPinia } from 'pinia' // Добавлено
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia() // Добавлено

app.use(pinia) // Добавлено: подключаем хранилище корзины
app.use(router)
app.mount('#app')