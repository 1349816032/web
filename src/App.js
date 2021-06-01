import React, { Component } from "react";
import { Button } from 'antd';
import './App.css';
import {getArticleList} from './js/network'

// const App = () => (
//     <div className="App">
//         <Button type="primary">Button</Button>
//     </div>
// );
class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getArticleList().then(
            (res) => {
                console.log("get article response:", res);
            },
            (error) => {
                console.log("get response failed!");
            }
        );
    }

}
export default App;
