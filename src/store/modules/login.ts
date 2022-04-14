import { defineStore } from "pinia";

const useLoginStore = defineStore({
    id: "login", // id必填，且需要唯一
    state: () => {
        return {
            userName: "xxx",
            userId: 1,
        };
    },
    // actions 用来修改 state
    actions: {
        login(userName: string) {
            uni.setStorageSync("userName", userName);
            this.userName = userName;
        },
        logout() {
            uni.clearStorage();
            this.userName = "已退出登录";
        },
    },
});

export default useLoginStore;
