import React, {Component} from 'react';
import "./css/index.css"

class Classify extends Component {
    state={
        data:""
    }
    componentDidMount() {
        fetch("http://47.100.98.54:9020/api/category")
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
            <div className={"classify"}>
                <ul className={"class-list"}>
                    {
                        this.state.data.length>0 && this.state.data.map((value,index)=>{
                            return (
                                <li key={value.id}><a href="#"><img src={value.picurl} alt={value.alt}/></a></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Classify;