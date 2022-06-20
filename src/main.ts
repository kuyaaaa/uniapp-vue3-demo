import { createSSRApp } from "vue";
import App from "./App.vue";
// 环境变量
import "../.env";
// pinia
import store from "./store";

export function createApp() {
    const app = createSSRApp(App);
    app.use(store);

    return {
        app,
    };
}
