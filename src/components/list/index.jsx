import React, {Component} from 'react';
import {Link} from "react-router-dom";

import Divider from "../divider_line/index";

import "./css/index.css"
class List extends Component {
    state={
        data:""
    }
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/goods")
            .then(data=>data.json())
            .then(data=>{
                if (data.status === 200) {
                    this.setState({
                        data:data.data
                    })
                }
            })
    }

    render() {
        return (
            <div className={"shop-list"}>
                <a href="#"><img className={"top-img"} src={require("./img/1.jpg")} alt=""/></a>
                <ul className={"list-items"}>
                    {
                        this.state.data.length>0 && this.state.data.map((value,index)=>{
                            return (
                                <li key={index}>
                                    <Link to={`/buying/${value.shopid}`}>
                                        <img src={value.picurl} alt=""/>
                                        <div className={"details"}>
                                            <p className={"shop-name"}>{value.title}</p>
                                            <p className={"shop-introduce"}>{value.des}</p>
                                            <div className={"price"}>
                                                <span className={"now-price"}>{value.symbol}{value.price}{value.font}</span>
                                                <span className={"old-price"}>￥1399</span>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <Divider />
                <a href="#"><img className={"bottom-img"} src={require("./img/10.jpg")} alt=""/></a>
            </div>
        );
    }
}

export default List;