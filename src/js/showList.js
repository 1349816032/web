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
function showList() {
    return new Promise((resolve, reject) => {
        http.get("/transaction/showAll", {}).then(
            (res) => {
                const columns= [
                    {
                    title: '客户号',
                    dataIndex : 'custId',
                    key: 'custId'
                  },
                  {
                    title: '交易账户',
                    dataIndex : 'account',
                    key: 'account'
                  },
                  {
                    title: '卡号',
                    dataIndex : 'cardNbr',
                    key: 'cardNbr'
                  },
                  {
                    title: '交易流水号',
                    dataIndex : 'tranno',
                    key: 'tranno'
                  },
                  {
                    title: '账单月',
                    dataIndex : 'monthNbr',
                    key: 'monthNbr'
                  },
                  {
                    title: '交易金额',
                    dataIndex : 'bill',
                    key: 'bill'
                  },
                  {
                    title: '交易类型',
                    dataIndex : 'transType',
                    key: 'transType'
                  },
                  {
                    title: '交易日期',
                    dataIndex : 'txnDatetime',
                    key: 'txnDatetime'
                  }
                ];
                //  document.getElementById('main').innerHTML=" <Table columns={columns} dataSource={obj}><Table/>";
            },
            (error) => {
                console.log("网络异常~", error);
                reject(error);
            }
        
        );
    });
}

export { showList };
