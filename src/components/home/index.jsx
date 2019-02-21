import React, {Component} from 'react';
import Head from "../head/index";
import Banner from "../banner/index";
import Classify from "../classify/index";
import Divider from "../divider_line/index";
import Recommend from "../recommend/index";
import Recommend2 from "../recommend2/index";
import List from "../list/index";
import Footer from "../footer/index";
class Home extends Component {
    render() {
        return (
            <div className={"app"}>
                <Head />
                <Banner />
                <Classify />
                <Divider />
                <Recommend />
                <Divider />
                <Recommend2 />
                <Divider />
                <List />
                <Footer />
            </div>
        );
    }
}

export default Home;