import { Component } from "react";
import { getArticleList } from "../js/network.js";
import {echartColumn} from "../js/echartColumn.js"
import {echartPie} from "../js/echartBar";
import {echartLine} from "../js/echartLine";
import {showList} from "../js/showList"
// 引入 ECharts 主模块
import * as echarts from 'echarts/lib/echarts'
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { GridComponent } from 'echarts/components';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import React from "react";
import 'antd/dist/antd.css';
import '../css/common.css';
import { Layout, Menu, Breadcrumb, Table } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);
const onSearch = value => console.log(value);
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
class Home extends Component {
    constructor(props) {
        super(props);
        console.log(12345);
    }
    state = {
        collapsed: false,
      };
    
      onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
      };
    
    render() {
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
      ]
        let obj=sessionStorage["user"];
        obj=JSON.parse(obj);
        console.log("type:",typeof(obj))
        console.log("obj",obj);
        const { collapsed } = this.state;
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<DesktopOutlined />} onClick={showList}>
                  交易详情表
                </Menu.Item>
                {/* <Menu.Item key="2" icon={<DesktopOutlined />}>
                  
                </Menu.Item> */}
                <SubMenu key="sub1" icon={<DesktopOutlined />} title="统计图表">
                  <Menu.Item key="3"  onClick={echartLine}>折线图</Menu.Item>
                  <Menu.Item key="4" onClick={echartColumn}>柱状图</Menu.Item>
                  <Menu.Item key="5" onClick={echartPie}>饼状图</Menu.Item>
                </SubMenu>
                {/* <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                  <Menu.Item key="6">Team 1</Menu.Item>
                  <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                  Files
                </Menu.Item> */}
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb> */}
                <div id="main" className="site-layout-background" style={{ padding: 24, minHeight: 360 ,textAlign: "center"}}>
                  {/* <Table
                    columns={columns}
                    rowKey={record => record.login.uuid}
                    dataSource={data}
                    pagination={pagination}
                    loading={loading}
                    onChange={this.handleTableChange}
                  /> */}
                    <Search
                      placeholder="请输入搜索信息"
                      allowClear
                      enterButton="Search"
                      size="large"
                      onSearch={onSearch}
                  />
                  <Table columns={columns} dataSource={obj}/>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
    
    }

    

    componentDidMount() {
        console.log(1232435);
        getArticleList().then(
            (res) => {
                console.log("get article response:",res);
                sessionStorage.setItem("user",JSON.stringify(res));
            },
            (error) => {
                console.log("get response failed!");
            }
        );
    }
    // showColmn(){
    //   console.log("showColmn");
    //   echartColumn().then(
    //     (res) => {
    //       console.log("get article response:",res);
    //       sessionStorage.setItem("showColmn",JSON.stringify(res));
    //   },
    //   (error) => {
    //       console.log("get response failed!");
    //   }
    //   );
    //   let echart =sessionStorage["showColmn"];
    //   echart = JSON.parse(echart);
    //   let myChart = echarts.init(document.getElementById('main'));
      
    // }
    getJsonLength(js){
      let length=0;
      for(let i in js){
        length++;
      }
      return length;
    }
}

export default Home;