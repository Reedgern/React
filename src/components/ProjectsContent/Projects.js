import React from "react";
import ProjectsList from "./Projects/ProjectsList";
import {connect} from "react-redux";
import {getProjectsTC} from "../../redux/projects-reducer";
import ProjectForm from "./ProjectForm/ProjectForm";

class Projects extends React.Component {
    componentDidMount() {
        if (!this.props.isInitialized) {
            this.props.getProjectsTC();
        }
    }

    render() {
        if (!this.props.isInitialized) {
            return (
                <div>
                    Loading...
                </div>
            );
        }
        return (
            <div>
                <ProjectsList/>
                <ProjectForm/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        isInitialized: state.projects.isInitialized
    };
};

let mapDispatchToProps = {
        getProjectsTC
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);