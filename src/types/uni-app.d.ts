import request from "@/utils/request";

declare global {
    interface Uni {
        /** 网路请求 */
        $http: typeof request;
    }
}
