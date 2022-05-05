import { AjaxInstance, AjaxRequestConfig } from "uni-ajax";

declare global {
    interface Window {
        $http: AjaxInstance<AjaxRequestConfig>;
    }
}
