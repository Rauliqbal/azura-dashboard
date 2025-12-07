import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import '@/style.css'
import router from "./router";
import { VsxIcon } from "vue-iconsax";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.component("VsxIcon", VsxIcon);
app.mount("#app");
