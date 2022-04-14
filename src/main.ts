import { createSSRApp } from "vue";
import App from "./App.vue";
// pinia
import store from "./store";

export function createApp() {
    const app = createSSRApp(App);
    app.use(store);

    return {
        app,
    };
}
