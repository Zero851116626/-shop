import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Footer from "../footer/index.jsx";

import "./css/index.css"
import "../footer/css/index.css"

class My extends Component {
    render() {
        return (
            <div className={"my"}>
                <div className={"my-Top"}>
                    <div className={"bg"}>
                        <img src={require("./img/1.png")} alt=""/>
                        <p className={"item"}>
                            <Link><span>登录</span></Link>/<Link><span>注册</span></Link>
                        </p>
                    </div>
                </div>
                <div className={"order"}>
                    <div className={"my-order"}>
                        <span>我的订单</span>
                        <Link>
                            <span>全部订单</span>
                            <i className="iconfont icon-xialatubiao"></i>
                        </Link>
                    </div>
                    <div className={"order-manage"}>
                        <ul>
                            <li>
                                <Link>
                                    <i className="iconfont icon-daifukuan "></i>
                                    <span>待付款</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <i className="iconfont icon-daishouhuo"></i>
                                    <span>待收货</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <i className="iconfont icon-xiugai "></i>
                                    <span>退换修</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={"line"}></div>
                <div className={"user-manage"}>
                    <ul className={"block"}>
                        <li>
                            <Link>
                                <img src={require("./img/2.png")} alt=""/>
                                <p>会员中心
                                    <i className={"iconfont icon-xialatubiao"}></i>
                                </p>

                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={require("./img/3.png")} alt=""/>
                                <p>我的优惠
                                    <i className={"iconfont icon-xialatubiao"}></i>
                                </p>

                            </Link>
                        </li>
                    </ul>
                    <div className={"line"}></div>
                    <ul className={"block"}>
                        <li>
                            <Link>
                                <img src={require("./img/4.png")} alt=""/>
                                <p>服务中心
                                    <i className={"iconfont icon-xialatubiao"}></i>
                                </p>

                            </Link>
                        </li>
                        <li>
                            <Link>
                                <img src={require("./img/5.png")} alt=""/>
                                <p>小米之家
                                    <i className={"iconfont icon-xialatubiao"}></i>
                                </p>
                            </Link>
                        </li>
                    </ul>
                    <div className={"line"}></div>
                    <ul className={"block"}>
                        <li>
                            <Link>
                                <img src={require("./img/6.png")} alt=""/>
                                <p>F码通道
                                    <i className={"iconfont icon-xialatubiao"}></i>
                                </p>
                            </Link>
                        </li>
                    </ul>
                    <div className={"line"}></div>
                    <ul className={"block"}>
                        <li>
                            <Link>
                                <img src={require("./img/7.png")} alt=""/>
                                <p>设置
                                    <i className={"iconfont icon-xialatubiao"}></i>
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        );
    }
}

export default My;