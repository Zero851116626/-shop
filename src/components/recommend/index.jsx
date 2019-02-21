import React, {Component} from 'react';
import "./css/index.css"
class Recommend extends Component {
    render() {
        return (
            <div className={"recommend"}>
                <div className={"bigger"}>
                    <a href="#"><img src={require("./img/1.jpg")} alt=""/></a>
                </div>
                <div className={"right_top"}>
                    <a href="#"><img src={require("./img/2.jpg")} alt=""/></a>
                </div>
                <div className={"right_bottom"}>
                    <a href="#"><img src={require("./img/3.jpg")} alt=""/></a>
                </div>
            </div>
        );
    }
}

export default Recommend;