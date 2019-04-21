import React, {Component} from "react";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import TeamPage from "../containers/Team/Team";

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <DefaultLayout>
                <TeamPage />
            </DefaultLayout>
        )
    }
}

export default Projects;
