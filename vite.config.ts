import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        AutoImport({
            imports: ["vue", "pinia"],
            dirs: ["./src/store/modules"],
            eslintrc: {
                enabled: true,
            },
        }),
        uni(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});
