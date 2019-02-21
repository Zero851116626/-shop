import React, {Component} from 'react';

import "./css/index.css"

class Pay extends Component {
    render() {
        return (
            <div className={"pay"}>
                <p>没有支付接口的支付页面</p>
                <img src={require("./img/1.gif")} alt=""/>
            </div>
        );
    }
}

export default Pay;