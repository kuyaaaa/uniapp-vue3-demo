module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        "vue/setup-compiler-macros": true,
    },
    globals: {
        getApp: "readonly",
        uni: "readonly",
        wx: "readonly",
        UniApp: "readonly",
    },
    parserOptions: {
        ecmaVersion: 13,
        parser: "@typescript-eslint/parser",
        sourceType: "module",
    },
    extends: [
        "plugin:vue/vue3-recommended",
        "airbnb-base",
        "plugin:prettier/recommended",
        "prettier",
        "./.eslintrc-auto-import.json",
    ],
    plugins: ["@typescript-eslint", "prettier"],
    rules: {
        "prettier/prettier": "error",
        "import/extensions": [2, "never", { "web.js": "never", json: "never", vue: "never" }],
        "import/no-extraneous-dependencies": [2, { devDependencies: true }],
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-console": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            { varsIgnorePattern: "Window", args: "none" },
        ],
    },
};
