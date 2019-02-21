import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
//需要再了解connect
import {connect} from "react-redux";
//从action中解构出addCart命令
import {addCart} from "../../action/cart";

import "./css/index.css"

//通过connect就把addCart方法添加到了当前环境中的this.props
//所以在调用的时候，也需要通过this.props.方法来调用
@connect(
    state=>({shop:state}),
    {addCart}
)
class Buying extends Component {
    state={
        data:{},
        num:0,
        id:0,
    }
    componentDidMount() {
        let id = this.props.match.params.shopid;
        fetch(`http://47.100.98.54:9020/api/buygoods/${id}`)
            .then(data=>data.json())
            .then(data=>{
                this.setState({
                    data:data,
                    id
                })
            })
    }
    //点击加号数量增加
    addNum=()=>{
        //如果不用箭头函数声明，this指向是有问题的，undefined
        //不使用箭头函数的，可以在调用方法的后边加bind，绑定this指向
        let num = this.state.num;
        num = num+1;
        this.setState({
            num
        })
    }
    reduceNum=()=>{
        let num = this.state.num;
        num=num?num-1:num;
        this.setState({
            num
        })
    }

    //提交数量到redux
    submitToRedux=()=>{
        let {num,id} = this.state;
        //有数量才会加入
        num && (
            //在这调用addCart的方法,返回出一个对象
            this.props.addCart({
                id,
                num
            })
        ) && (
            this.afterBuyAlert()
        )
    }
    //加入购物车之后的弹窗
    afterBuyAlert=()=>{
        let buyAlert = document.querySelector(".buySuccessfully")
        buyAlert.style.display = "block";
        let timer = setTimeout(()=>{
            clearTimeout(timer);
            buyAlert.style.display = "none";
        },1200)
    }
    render() {
        return (
            <div className={"buying"}>
                <div className={"top-banner"}>
                    <img src={this.state.data.picurl} alt=""/>
                </div>
                <div className={"info"}>
                    <p className={"title"}>{this.state.data.title}</p>
                    <p className={"des"}>{this.state.data.des}</p>
                    <div className={"price"}>
                        <span className={"now-price"}>{this.state.data.symbol}{this.state.data.price}{this.state.data.font}</span>
                        <span className={"old-price"}>{this.state.data.symbol}1399</span>
                    </div>
                </div>
                <div className={"number"}>
                    <div className={"num-deal"}>
                        <span className={"sub"} onClick={this.reduceNum}></span>
                        <span className={"show"}>{this.state.num}</span>
                        <span className={"add"} onClick={this.addNum}></span>
                    </div>
                </div>
                <div className={"buySuccessfully"}>添加成功</div>
                <div className={"add-in-basket"}>
                    <NavLink to={"/"} className={"bas-home"}>
                        <i className={"iconfont  icon-shouye"}></i>
                        <span>首页</span>
                    </NavLink>
                    <NavLink to={"/basket"} className={"bas-basket"}>
                        <i className={"iconfont  icon-icon01"}></i>
                        <span>购物车</span>
                    </NavLink>
                    <div
                        className={"add-basket"}
                        onClick={this.submitToRedux}
                    >加入购物车</div>
                </div>
            </div>
        );
    }
}

export default Buying;