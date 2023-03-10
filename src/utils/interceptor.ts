import { guardsInvoke } from "@/router/index";
/**
 * 拦截器方法
 * @docs    https://uniapp.dcloud.net.cn/api/interceptor.html
 */

uni.addInterceptor("navigateTo", {
    invoke: guardsInvoke,
});
uni.addInterceptor("redirectTo", {
    invoke: guardsInvoke,
});
uni.addInterceptor("reLaunch", {
    invoke: guardsInvoke,
});
uni.addInterceptor("switchTab", {
    invoke: guardsInvoke,
});
