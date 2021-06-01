/**
 * 网络请求配置
 */
import axios from "axios";

axios.defaults.timeout = 100000;
// axios.defaults.baseURL = "http://192.168.57.238:8080";
axios.defaults.baseURL = "http://localhost:8080";

/**
 * http request 拦截器
 */
axios.interceptors.request.use(
    (config) => {
        config.data = JSON.stringify(config.data);
        config.headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        };
        console.log(9485068);
        return config;
    },
    (error) => {
        console.log(123860);
        return Promise.reject(error);
    }
);
/**
 * http response 拦截器
 */
axios.interceptors.response.use(
    (response) => {
        console.log(11567899);
        if (response.data.errCode === 2) {
            console.log("过期");
        }
        return response;
    },
    (error) => {
        console.log("请求出错：", error);
    }
);

const $http = {
    get(url, params = {}) {
        console.log(3,url);
        return new Promise((resolve, reject) => {
            axios
                .get(url, {
                    params: params,
                })
                .then((response) => {
                    landing(url, params, response.data);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(1234211);
                    reject(error);
                });
        });
    },

    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, data).then(
                (response) => {
                    //关闭进度条
                    resolve(response.data);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    },
};

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
    if (data.code === -1) {
    }
}

export default $http;