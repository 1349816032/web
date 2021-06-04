import Home from "../view/home";
import http from "./axios"

/**
 * 获取首页列表
 */
console.log(http);
function selectData(){
    return new Promise((resolve, reject) => {
        http.get("/transaction/select",{"type":"客户号","data":2}).then(
            (res) => {
                console.log(res);
                sessionStorage.setItem("user",JSON.stringify(res));
                resolve(res);
            },
            (error) => {
                console.log("网络异常~", error);
                reject(error);
            }
        );
    });
}

export { selectData };