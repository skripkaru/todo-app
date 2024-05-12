import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Typography, Layout, Button, List, Input, Checkbox, Select, Form } from 'ant-design-vue';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(Typography);
app.use(Layout);
app.use(Button);
app.use(List);
app.use(Input);
app.use(Checkbox);
app.use(Select);
app.use(Form);

app.mount('#app')
