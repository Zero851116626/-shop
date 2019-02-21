import React, {Component} from 'react';
import "./css/index.css"

class Notfound extends Component {
    render() {
        return (
            <div className={"notfound"}>
                <img src={require("./img/notfound.jpg")} alt=""/>
            </div>
        );
    }
}

export default Notfound;