// 配置store
//因为一个项目中，只有一个store，那么这个store就是本项目的数据管理中心的入口
// 这就是那个总的reducer
import {createStore} from "redux";
//把总的reducer引入进来
import Reducer from "../reducers/index";


//创建store需要三个参数，非必须。
//第一个参数是reducer,
//第二个参数多用于同构应用来初始state
export default function(init){
    //init是state的初始值
    //正儿八经的创建一个实例
    const store = createStore(
        Reducer,
        init,
        window.devToolsExtension?window.devToolsExtension():undefined
    );
    return store
}
