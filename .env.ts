// 环境变量文件
/** development 环境变量 */
export const development = {
    BASE_API_URL: "test.development.com",
};

/** production 环境变量 */
export const production = {
    BASE_API_URL: "test.production.com",
};

/** 当前环境名 */
type Env = "development" | "production";
// 环境名
const ENV = process.env.NODE_ENV as Env;

const obj = ENV === "production" ? development : production;

process.env = { ...process.env, ...obj };
