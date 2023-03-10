import { createSSRApp } from "vue";
import App from "./App.vue";
import request from "./utils/request";
import store from "./store";

import "./utils/interceptor";

uni.$http = request;

export function createApp() {
    const app = createSSRApp(App);
    app.use(store);

    return {
        app,
    };
}
