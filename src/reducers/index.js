// 应用的功能越来越复杂，所以把reducer拆分，
// 进行模块化管理，每个模块负责管理state中的一部分功能或数据
// 然后把所有的reducer合成一个reducer，
// 就可以对这个reducer函数调用createStore

//本文件就是实现将所有的子reducer合并成一个Reducer的功能

import {combineReducers} from "redux";
//把子reducer引入到本文件中
import cartCount from "./cartCount"
import user from "./user";

export default combineReducers({
    cartCount,
    user
})