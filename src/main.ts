import { createSSRApp } from "vue";
import App from "./App.vue";

// pinia
import store from "./store";

import request from "./utils/request";

uni.$http = request;

export function createApp() {
    const app = createSSRApp(App);
    app.use(store);

    return {
        app,
    };
}
