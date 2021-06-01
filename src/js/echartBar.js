import http from "./axios"
// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
import * as echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
/**
 * 获取首页列表
 */
console.log(http);
function echartPie() {
    return new Promise((resolve, reject) => {
        http.get("/statistic/pie", {}).then(
            (res) => {
                resolve(res);
                var echarts = require('echarts');
                let myChart = echarts.init(document.getElementById('main'));
             
                let option = {
                    title: {
                        text: "前10消费客户占比"
                    },
                    // tooltip: {},
                    series:{
                        name: "前10消费客户占比",
                        data:  res,
                        type: "pie"
                    }
                    
                }
                myChart.setOption(option);
            },
            (error) => {
                console.log("网络异常~", error);
                reject(error);
            }
        
        );
    });
}

export { echartPie };
