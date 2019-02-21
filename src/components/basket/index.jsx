import React, {Component} from 'react';
import {Link} from "react-router-dom";

import {connect} from "react-redux";
//把三个行为拿出来
import {addCart,delCart,getGoodsNum} from "../../action/cart";

import "./css/index.css"

//把三个行为传入到this.props中
@connect(
    state=>({shop:state}),
    {addCart,delCart,getGoodsNum}
)

class Basket extends Component {
    state={
        goods:[],
        count:0,
        price:0,
    }
    getData=()=>{
        //得到传来的商品id和数量
        let {cartCount} = this.props.shop;
        let {goods} = this.state
        //将这一个对象中的属性转化为数组去遍历
        let shopid = Object.keys(cartCount);
        shopid.forEach((v)=>{
            fetch(`http://47.100.98.54:9020/api/buygoods/${v}`)
                .then((res)=>res.json())
                .then((data)=>{
                    //添加当前id商品的数量这个属性
                    data["num"] = cartCount[v];
                    goods.push(data);
                    this.setState({
                        goods:goods,
                    })
                })
            this.settime()
        })
    }
    componentDidMount() {
        this.getData();
    }
    //加的点击事件
    add=(index)=>{
        let goods = this.state.goods;
        let {addCart} = this.props;
        //获取本条数据的id
        let id = goods[index].shopid;
        goods[index].num++;
        this.setState({goods})
        addCart({
            id,
            num:1,
        })
        this.total();
    }
    reduce=(index)=>{
        let goods = this.state.goods;
        let {addCart} = this.props;
        //获取本条数据的id
        let id = goods[index].shopid;
        if(goods[index].num){
            goods[index].num--;
            this.setState({goods})
            addCart({
                id,
                num:-1,
            })
        }
        this.total();
    }
    //删除
    remove=(index)=>{
        let goods = this.state.goods;
        let {delCart} = this.props;
        //删除对应的id,本地存储内的
        delCart(goods[index].shopid);
        //删除购物车数组中的对应商品
        goods.splice(index,1)
        this.setState({goods})
        this.total();
    }


    //为了防止未请求数据就调用所以加一个定时器
    settime = ()=>{
        let timer = setTimeout(()=>{
            clearTimeout(timer);
            this.total();
        },200)
    }
    //计算总价格和总件数的功能
    total=()=>{
        let goods = this.state.goods;
        let num = 0 ,price = 0;
        for(let key of goods){
            num = num +key.num;
            price = price + key.num * key.price;
        }
        this.setState({
            count:num,
            price:price,
        })
    }
    render() {
        return (
            <div className={"basket"}>
                <div className={"top"}>
                    <Link to={"/basket"}><i className="back iconfont icon-xiala1-xiangzuo "></i></Link>
                    <span>购物车</span>
                    <i className="search iconfont icon-search  "></i>
                </div>
                <div className={"shoplist"}>
                    <ul>
                        {
                            this.state.goods.length>0 && this.state.goods.map((v,index)=>{
                                return (
                                    <li key={index} className={"list"}>
                                        <img src={v.picurl} alt={v.title}/>
                                        <div className={"info"}>
                                            <a href="#"><p>{v.title}</p></a>
                                            <span>售价：{v.price}元</span>
                                            <div className={"number"}>
                                                <div className={"num-deal"}>
                                                    <span
                                                        className={"sub"}
                                                        onClick={this.reduce.bind(this,index)}
                                                    > </span>
                                                    <span className={"show"}>{v.num}</span>
                                                    <span
                                                        className={"add"}
                                                        onClick={this.add.bind(this,index)}
                                                    > </span>
                                                </div>
                                                <i
                                                className="remove iconfont icon-shanchu"
                                                onClick={this.remove.bind(this,index)}
                                                > </i>
                                            </div>

                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={"bottom"}>
                    <div className={"total"}>
                        <div>
                            <span className={"total-num"}>共{this.state.count}件 金额</span>
                            <span className={"price"}>{this.state.price}</span>元
                        </div>
                    </div>
                    <div className={"buymore"}>
                        <Link to={"/"}>继续购物</Link>
                    </div>
                    <div className={"pay"}>
                        <Link to={"/pay"}>去结算</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basket;