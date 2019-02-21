import React from 'react';
import ReactDOM from 'react-dom';
import "./static/css/common.css"
import App from './App';
//provide,负责处理数据在子组件中的传递，当然还需要结合connect
import {Provider} from "react-redux";
//工具，在工具中创建了store。
import configStore from "./store/configStore"

//创建一个store实例，但是创建的具体过程，独立成一个store文件
//模块化思想
const store  = configStore();
ReactDOM.render(
    //这里是要讲store传入，这样所有子组件都能获得store属性
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

