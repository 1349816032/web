import http from "./axios"

/**
 * 获取首页列表
 */
console.log(http);
function getArticleList() {
    return new Promise((resolve, reject) => {
        http.get("/transaction/showAll", {}).then(
            (res) => {
                resolve(res);
            },
            (error) => {
                console.log("网络异常~", error);
                reject(error);
            }
        );
    });
}

export { getArticleList };
