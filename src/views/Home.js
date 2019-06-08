import React, {Component} from "react";
// import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
// import HomePage from "../containers/HomePage/HomePage";
import UnderConstruction from "./UnderConstruction";
import '../styles/main.scss';

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <UnderConstruction />
        )
    }
}

export default Home;

//
// <DefaultLayout>
//   <HomePage />
// </DefaultLayout>
