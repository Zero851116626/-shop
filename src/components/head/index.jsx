import React, {Component} from 'react';
import "./css/index.css"

class Index extends Component {
    //设置state
    state={
        data:""
    }
    componentDidMount() {
        fetch("//47.100.98.54:9020/api/name")
            .then((data)=>data.json())
            .then(data=>{
                //增加一个判断，因为有可能返回的不是我们要的东西
                if(data.status === 200){
                    //这里就是我们需要的数据,重新渲染
                    this.setState({
                        data:data.name
                    })
                }
            })
    }
    render() {
        return (
            <div className={"head"}>
                <div className={"head_top"}>
                    <img src={require("./img/logo.png")} alt=""/>
                    <a href="#">
                        <div className={"search"}>
                            <i className={"iconfont icon-search"}></i>
                            <span>react项目练习</span>
                        </div>
                    </a>
                    <a href="#">
                        <i className={"user iconfont  icon-user"}></i>
                    </a>
                </div>
                <div className={"head_bottom"}>
                    <div className={"nav-list"}>
                        <ul className={"list"}>
                            <li><a href="#">推荐</a></li>
                            <li><a href="#">手机</a></li>
                            <li><a href="#">春节不打烊</a></li>
                            <li><a href="#">智能</a></li>
                            <li><a href="#">电视</a></li>
                            <li><a href="#">笔记本</a></li>
                            <li><a href="#">生活周边</a></li>
                            <li><a href="#">家电</a></li>
                        </ul>
                    </div>
                <i className={"down iconfont  icon-xiala"}></i>
                </div>
            </div>
        );
    }
}

export default Index;