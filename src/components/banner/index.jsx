import React, {Component} from 'react';
import Swiper from "swiper";

import {Link} from "react-router-dom";

import "./css/index.css"
class Banner extends Component {
    state = {
        data:""
    }
    play(){
        new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
        })
    }
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/banner")
            .then(data=>data.json())
            .then(data=>{
                if(data.status === 200 ){
                    this.setState({
                        data:data.data,
                    })
                    //当数据更新完成后，在去调用轮播功能
                    this.play();
                }
            })
    }
    render() {
        return (
            <div className={"swiper-container banner"}>
                <ul className={"swiper-wrapper banner-list"}>
                    {
                        this.state.data.length>0 && this.state.data.map((value,index)=>{
                            return(
                                <li key={index} className={"swiper-slide"}><Link to={`/buying/${value.shopid}`}><img src={value.picurl} alt={value.alt}/></Link></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Banner;