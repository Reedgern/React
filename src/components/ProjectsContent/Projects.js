import React from "react";
import ProjectsList from "./Projects/ProjectsList";
import {connect} from "react-redux";
import {getProjectsTC} from "../../redux/projects-reducer";
import ProjectForm from "./ProjectForm/ProjectForm";

class Projects extends React.Component {
    componentDidMount() {
        if (this.props.isLoading) {
            this.props.getProjectsTC();
        }
    }

    render() {
        if (this.props.isLoading) {
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
        isLoading: state.projects.isLoading
    };
};

let mapDispatchToProps = {
        getProjectsTC
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);