import http from "./axios"
// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
import * as echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
/**
 * 获取首页列表
 */
console.log(http);
function echartLine() {
    return new Promise((resolve, reject) => {
        http.get("/statistic/line", {}).then(
            (res) => {
                resolve(res);
                var echarts = require('echarts');
                let myChart = echarts.init(document.getElementById('main'));
                console.log("res[]",res["value"]);
                let option = {
                    title: {
                        text: "交易总额趋势",
                        x: 'center'
                    },
                    tooltip: {},
    
                    xAxis: {
                        data: res["date"]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series:{
                        name: "",
                        data: res["value"],
                        type: "line"
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

export { echartLine };
