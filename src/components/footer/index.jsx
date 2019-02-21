import React, {Component} from 'react';

import {
    NavLink,
} from "react-router-dom";

import "./css/index.css"

class Footer extends Component {
    render() {
        console.log(this.props)
        return (
            <div className={"footer"}>
                <ul className="list">
                    <li>
                        <NavLink to="/">
                            <i className={"iconfont  icon-shouye"}></i>
                            <span>首页</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify">
                            <i className={"iconfont  icon-fenlei"}></i>
                            <span>分类</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="basket">
                            <i className={"iconfont  icon-icon01"}></i>
                            <span>购物车</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">
                            <i className={"iconfont  icon-user"}></i>
                            <span>用户</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Footer;