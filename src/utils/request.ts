/**
 * HTTP请求封装
 * uni-ajax
 * @docs    https://uniajax.ponjs.com/
 */
import ajax from "uni-ajax";
import { TOKEN } from "./static";

const baseURL = `${import.meta.env.VITE_BASE_URL}`;
const token = uni.getStorageSync(TOKEN);

// 创建请求实例
const request = ajax.create({
    // 初始配置
    baseURL,
    header: {
        [TOKEN]: token,
    },
});

// 请求拦截器
request.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器
request.interceptors.response.use(
    res => {
        // 根据情况判断错误提示
        if (!res.data?.ok) {
            uni.showToast({
                title: res.data.msg || `未知错误`,
                icon: "none",
            });
            console.error(`request error: ${res.data.msg}`);
            console.table(res.data.errors);
        }

        return res.data;
    },
    error => {
        return Promise.reject(error);
    }
);

export default request;
