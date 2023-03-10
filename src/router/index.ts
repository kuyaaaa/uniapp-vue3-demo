/**
 * 跳转拦截
 * 仅拦截 [navigateTo redirectTo reLaunch switchTab]
 * 通过返回值判断是否跳转，return false时进行拦截
 */
export const guardsInvoke = (options: UniApp.NavigateToOptions) => {
    console.log("[guards param]", options);
};
