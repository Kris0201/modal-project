import { createApp } from 'vue' //此行等於 Vue.createApp
import App from './App.vue'     //App為根元件，會掛載到#app上

import './assets/global.css' //此css作為控制所有元件共用的css設定

createApp(App).mount('#app')
