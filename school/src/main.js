import './assets/main.css'

import { createApp,provide } from 'vue'
import { createPinia } from 'pinia'

// App+router
import App from './App.vue'
import router from './router'

// navie UI
import 'vfonts/Lato.css'
import naive from 'naive-ui'
// axios
import axios from 'axios'

axios.defaults.baseURL = 'https://acserver.zhou.lk';


const app = createApp(App)

app.provide('axios', axios);

app.use(createPinia())
app.use(router)
app.use(naive)

app.mount('#app')
