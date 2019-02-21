import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
// import {addCart,delCart,getGoodsNum} from "./action/cart";
// import {connect} from "react-redux";

// import configStore from "./store/configStore";


import Home from "./components/home";
import Notfound from "./components/notfound404";
import My from "./components/usermanage";
import Basket from "./components/basket";
import Buying from "./components/buying";
import Pay from "./components/paypage";

// @connect(
//     state =>({xyz:state}),
//     {addCart,delCart,getGoodsNum}
// )

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    {/*首页只规定路由就好，路由的跳转，让各个模块内部实现*/}
                    <Route exact path={"/"} component={Home}/>
                    {/*这里是点击后的详情页面*/}
                    <Route path={"/buying/:shopid"} component={Buying} />
                    {/*这里是购物车*/}
                    <Route path={"/basket"} component={Basket}/>
                    {/*这里是用户页面*/}
                    <Route path={"/user"} component={My}/>
                    {/*这个是结算页面*/}
                    <Route path={"/pay"} component={Pay} />
                    {/*这里是404页面*/}
                    <Route component={Notfound}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
