import http from "./axios"
// 引入 ECharts 主模块
// import echarts from 'echarts/lib/echarts';
import * as echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
/**
 * 获取首页列表
 */
console.log(http);
function echartColumn() {
    return new Promise((resolve, reject) => {
        http.get("/statistic/column", {}).then(
            (res) => {
                resolve(res);
                var seriesValue = [];
                var bgColorList = ['#FBB730', '#31BDF2'];
                for (var i = 0; i < res["legendData"].length; i++) {
                    var seriesDataVal = null;
                    seriesDataVal = {
                        barWidth: 10,//柱状条宽度
                        name:res["legendData"][i],
                        type:'bar',
                        itemStyle: {
                            normal: {
                                show: true,//鼠标悬停时显示label数据
                                barBorderRadius: [10, 10, 10, 10],//柱形图圆角，初始化效果
                                 color: bgColorList[i]
                            }
                        },
                        label: {
                            normal: {
                                show: true, //显示数据
                                position: 'top'//显示数据位置 'top/right/left/insideLeft/insideRight/insideTop/insideBottom'
                            }
                        } ,
                        data:res["arrData"]
                    };
                    seriesValue.push(seriesDataVal);
                }
                buildChart(res["legendData"],res["axisLabel"],seriesValue);
            },
            (error) => {
                console.log("网络异常~", error);
                reject(error);
            }
        
        );
    });
}
function buildChart(legendData, axisLabel, seriesValue) {
    var chart = document.getElementById('main');
    var echart = echarts.init(chart);
    var option = {
        title: {
            text: "每日还款总笔数和消费总笔数",//正标题
            x: "center", //标题水平方向位置
            y: "0", //标题竖直方向位置
            textStyle: {
                fontSize: 18,
                fontWeight: 'normal',
                color: '#666'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'//阴影，若需要为直线，则值为'line'
            }
        },
        toolbox: {
            show: true,
            feature: {
                saveAsImage: {show: true}
            }
        },
        legend: {
            data: legendData,
            y: 'bottom'//图例说明文字设置

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            top:'10%',
            containLabel: true
        },
        xAxis: [{
            min: 0,
            type: 'category', //纵向柱状图，若需要为横向，则此处值为'value'， 下面 yAxis 的type值为'category'
            data: axisLabel
        }],
        yAxis: [{
            min: 0,
            type: 'value',
            splitArea: {show: false}
        }],
        label: {
            normal: { //显示bar数据
                show: true,
                position: 'top'
            }
        },
        series: seriesValue
    };

    echart.setOption(option);
}

export { echartColumn };
